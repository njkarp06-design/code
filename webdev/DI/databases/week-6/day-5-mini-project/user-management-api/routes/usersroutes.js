const express = require('express')
const router = express.Router()
const fs = require('fs')
const bcrypt = require('bcrypt')
const path = require('path')

const FILE = path.join(__dirname, '../users.json')

function readUsers() {
    const data = fs.readFileSync(FILE, 'utf8')
    return JSON.parse(data)
}

function writeUsers(users) {
    fs.writeFileSync(FILE, JSON.stringify(users, null, 2))
}

router.post('/register', async (req, res) => {
    try {
        const { name, last_name, email, username, password } = req.body
        const users = readUsers()

        const exists = users.find(u => u.username === username || u.email === email)
        if (exists) {
            return res.status(400).json({ error: 'Username or email already exists' })
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = {
            id: users.length + 1,
            name,
            last_name,
            email,
            username,
            password: hashedPassword
        }

        users.push(newUser)
        writeUsers(users)

        res.status(201).json({ message: `User ${username} registered successfully!` })
    } catch (err) {
        res.status(500).json({ error: 'Server error during registration' })
    }
})

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body
        const users = readUsers()

        const user = users.find(u => u.username === username)
        if (!user) {
            return res.status(401).json({ error: 'User not registered. Please sign up first.' })
        }

        const match = await bcrypt.compare(password, user.password)
        if (!match) {
            return res.status(401).json({ error: 'Invalid password' })
        }

        res.json({ message: `Welcome back, ${user.name}! You are now logged in.` })
    } catch (err) {
        res.status(500).json({ error: 'Server error during login' })
    }
})

router.get('/users', (req, res) => {
    try {
        const users = readUsers()
        const safeUsers = users.map(({ password, ...rest }) => rest)
        res.json(safeUsers)
    } catch (err) {
        res.status(500).json({ error: 'Could not read users' })
    }
})

router.get('/users/:id', (req, res) => {
    try {
        const users = readUsers()
        const user = users.find(u => u.id === parseInt(req.params.id))
        if (!user) return res.status(404).json({ error: 'User not found' })
        const { password, ...safeUser } = user
        res.json(safeUser)
    } catch (err) {
        res.status(500).json({ error: 'Could not read user' })
    }
})

router.put('/users/:id', (req, res) => {
    try {
        const users = readUsers()
        const index = users.findIndex(u => u.id === parseInt(req.params.id))
        if (index === -1) return res.status(404).json({ error: 'User not found' })

        const { password, ...updates } = req.body
        users[index] = { ...users[index], ...updates }
        writeUsers(users)

        const { password: pwd, ...safeUser } = users[index]
        res.json(safeUser)
    } catch (err) {
        res.status(500).json({ error: 'Could not update user' })
    }
})

module.exports = router
