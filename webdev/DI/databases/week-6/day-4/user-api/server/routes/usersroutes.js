const express = require('express')
const router = express.Router()
const Users = require('../controllers/userscontroller')

router.post('/register', Users.register)
router.post('/login', Users.login)
router.get('/users', Users.getAll)
router.get('/users/:id', Users.getById)
router.put('/users/:id', Users.update)

module.exports = router
