const Users = require('../models/usersmodel')

const register = async (req, res, next) => {
    try {
        const user = await Users.register(req.body)
        res.status(201).json(user)
    } catch (err) {
        next(err)
    }
}

const login = async (req, res, next) => {
    try {
        const { username, password } = req.body
        const user = await Users.login(username, password)
        if (!user) return res.status(401).json({ error: 'Invalid credentials' })
        res.json({ message: 'Login successful', user })
    } catch (err) {
        next(err)
    }
}

const getAll = async (req, res, next) => {
    try {
        const users = await Users.getAll()
        res.json(users)
    } catch (err) {
        next(err)
    }
}

const getById = async (req, res, next) => {
    try {
        const user = await Users.getById(req.params.id)
        if (!user) return res.status(404).json({ error: 'User not found' })
        res.json(user)
    } catch (err) {
        next(err)
    }
}

const update = async (req, res, next) => {
    try {
        const [user] = await Users.update(req.params.id, req.body)
        if (!user) return res.status(404).json({ error: 'User not found' })
        res.json(user)
    } catch (err) {
        next(err)
    }
}

module.exports = { register, login, getAll, getById, update }
