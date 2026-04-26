const db = require('../config/db');

const getAll = () => db('posts').select('*');

const getById = (id) => db('posts').where({ id }).first();

const create = (data) => db('posts').insert(data).returning('*');

const update = (id, data) => db('posts').where({ id }).update(data).returning('*');

const remove = (id) => db('posts').where({ id }).del();

module.exports = { getAll, getById, create, update, remove };
