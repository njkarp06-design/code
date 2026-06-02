const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const rateLimit = require('express-rate-limit')
const users = require('../data/users')

const router = express.Router()

const JWT_SECRET = 'my_secret_key_123'
const REFRESH_SECRET = 'my_refresh_secret_456'

const revokedTokens = []

const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: { error: 'too many login attempts, please try again later' }
})

const refreshLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 20,
    message: { error: 'too many requests' }
})

router.post('/register', async (req, res) => {
    const { username, password, email } = req.body

    if (!username || !password) {
        return res.status(400).json({ error: 'username and password are required' })
    }
    if (username.length < 3) {
        return res.status(400).json({ error: 'username must be at least 3 characters' })
    }
    if (password.length < 6) {
        return res.status(400).json({ error: 'password must be at least 6 characters' })
    }

    const existingUser = users.find(u => u.username === username)
    if (existingUser) {
        return res.status(409).json({ error: 'username already taken' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = {
        id: users.length + 1,
        username,
        password: hashedPassword,
        email: email || null,
        emailVerified: false
    }
    users.push(newUser)

    const accessToken = jwt.sign({ id: newUser.id, username }, JWT_SECRET, { expiresIn: '1h' })
    const refreshToken = jwt.sign({ id: newUser.id }, REFRESH_SECRET, { expiresIn: '7d' })

    res.cookie('accessToken', accessToken, { httpOnly: true, maxAge: 60 * 60 * 1000 })
    res.cookie('refreshToken', refreshToken, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 })

    res.status(201).json({ message: 'registered successfully', userId: newUser.id })
})

router.post('/login', loginLimiter, async (req, res) => {
    const { username, password } = req.body

    if (!username || !password) {
        return res.status(400).json({ error: 'username and password are required' })
    }

    const user = users.find(u => u.username === username)
    if (!user) {
        return res.status(401).json({ error: 'invalid credentials' })
    }

    const passwordMatch = await bcrypt.compare(password, user.password)
    if (!passwordMatch) {
        return res.status(401).json({ error: 'invalid credentials' })
    }

    const accessToken = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' })
    const refreshToken = jwt.sign({ id: user.id }, REFRESH_SECRET, { expiresIn: '7d' })

    res.cookie('accessToken', accessToken, { httpOnly: true, maxAge: 60 * 60 * 1000 })
    res.cookie('refreshToken', refreshToken, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000 })

    res.json({ message: 'logged in successfully' })
})

router.post('/logout', (req, res) => {
    const refreshToken = req.cookies.refreshToken

    if (refreshToken) {
        revokedTokens.push(refreshToken)
    }

    res.clearCookie('accessToken')
    res.clearCookie('refreshToken')
    res.json({ message: 'logged out successfully' })
})

router.post('/refresh', refreshLimiter, (req, res) => {
    const refreshToken = req.cookies.refreshToken

    if (!refreshToken) {
        return res.status(401).json({ error: 'no refresh token provided' })
    }

    if (revokedTokens.includes(refreshToken)) {
        return res.status(403).json({ error: 'refresh token has been revoked' })
    }

    try {
        const decoded = jwt.verify(refreshToken, REFRESH_SECRET)
        const user = users.find(u => u.id === decoded.id)

        if (!user) {
            return res.status(403).json({ error: 'user not found' })
        }

        const newAccessToken = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' })
        res.cookie('accessToken', newAccessToken, { httpOnly: true, maxAge: 60 * 60 * 1000 })

        res.json({ message: 'token refreshed successfully' })
    } catch (err) {
        return res.status(403).json({ error: 'invalid or expired refresh token' })
    }
})

module.exports = router
