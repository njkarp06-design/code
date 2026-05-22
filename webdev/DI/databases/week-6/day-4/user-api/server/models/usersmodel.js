const db = require('../config/db')
const bcrypt = require('bcrypt')

const getAll = () => db('users').select('*')

const getById = (id) => db('users').where({ id }).first()

const update = (id, data) => db('users').where({ id }).update(data).returning('*')

const register = async (userData) => {
    const { email, username, first_name, last_name, password } = userData
    const hashedPassword = await bcrypt.hash(password, 10)

    return db.transaction(async (trx) => {
        const [user] = await trx('users').insert({ email, username, first_name, last_name }).returning('*')
        await trx('hashpwd').insert({ username, password: hashedPassword })
        return user
    })
}

const login = async (username, password) => {
    const hashRecord = await db('hashpwd').where({ username }).first()
    if (!hashRecord) return null

    const match = await bcrypt.compare(password, hashRecord.password)
    if (!match) return null

    return db('users').where({ username }).first()
}

module.exports = { getAll, getById, update, register, login }
