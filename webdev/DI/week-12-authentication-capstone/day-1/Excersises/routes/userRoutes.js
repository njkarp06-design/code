const express = require('express')
const bcrypt = require('bcrypt')
const authenticateToken = require('../middleware/authMiddleware')
const users = require('../data/users')

const router = express.Router()

router.get('/profile', authenticateToken, (req, res) => {
    const user = users.find(u => u.id === req.user.id)

    if (!user) {
        return res.status(404).json({ error: 'user not found' })
    }

    res.json({
        id: user.id,
        username: user.username,
        email: user.email,
        emailVerified: user.emailVerified
    })
})

router.put('/profile', authenticateToken, async (req, res) => {
    const user = users.find(u => u.id === req.user.id)

    if (!user) {
        return res.status(404).json({ error: 'user not found' })
    }

    const { username, password } = req.body

    if (username) {
        if (username.length < 3) {
            return res.status(400).json({ error: 'username must be at least 3 characters' })
        }
        const taken = users.find(u => u.username === username && u.id !== user.id)
        if (taken) {
            return res.status(409).json({ error: 'username already taken' })
        }
        user.username = username
    }

    if (password) {
        if (password.length < 6) {
            return res.status(400).json({ error: 'password must be at least 6 characters' })
        }
        user.password = await bcrypt.hash(password, 10)
    }

    res.json({ message: 'profile updated', username: user.username })
})

router.get('/dashboard', authenticateToken, (req, res) => {
    res.json({ message: `welcome to your dashboard, ${req.user.username}` })
})

module.exports = router
