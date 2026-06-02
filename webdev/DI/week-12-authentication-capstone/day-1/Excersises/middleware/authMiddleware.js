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
