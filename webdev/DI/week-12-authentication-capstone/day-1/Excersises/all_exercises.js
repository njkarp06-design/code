// =====================================
// START: data/users.js
// =====================================
const users = []

module.exports = users
// =====================================
// END: data/users.js
// =====================================


// =====================================
// START: middleware/authMiddleware.js
// =====================================
const jwt = require('jsonwebtoken')

const JWT_SECRET = 'my_secret_key_123'

const authenticateToken = (req, res, next) => {
    const token = req.cookies.accessToken

    if (!token) {
        return res.status(401).json({ error: 'access denied, no token provided' })
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET)
        req.user = decoded
        next()
    } catch (err) {
        return res.status(403).json({ error: 'invalid or expired token' })
    }
}

module.exports = authenticateToken
// =====================================
// END: middleware/authMiddleware.js
// =====================================


// =====================================
// START: routes/authRoutes.js
// =====================================
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
// =====================================
// END: routes/authRoutes.js
// =====================================


// =====================================
// START: routes/userRoutes.js
// =====================================
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
// =====================================
// END: routes/userRoutes.js
// =====================================


// =====================================
// START: app.js
// =====================================
const express = require('express')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/authRoutes')
const userRoutes = require('./routes/userRoutes')

const app = express()

app.use(bodyParser.json())
app.use(cookieParser())

app.use('/auth', authRoutes)
app.use('/user', userRoutes)

const PORT = 3000

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})
// =====================================
// END: app.js
// =====================================
