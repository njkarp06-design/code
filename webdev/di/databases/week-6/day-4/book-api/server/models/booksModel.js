const db = require('../config/db');

const getAll = () => db('books').select('*');

const getById = (id) => db('books').where({ id }).first();

const create = (data) => db('books').insert(data).returning('*');

const update = (id, data) => db('books').where({ id }).update(data).returning('*');

const remove = (id) => db('books').where({ id }).del();

module.exports = { getAll, getById, create, update, remove };
