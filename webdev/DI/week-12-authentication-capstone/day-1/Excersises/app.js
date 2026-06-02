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
