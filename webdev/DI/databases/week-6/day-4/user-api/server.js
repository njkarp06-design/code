const express = require('express')
const usersRoutes = require('./server/routes/usersroutes')

const app = express()

app.use(express.json())
app.use('/', usersRoutes)

app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' })
})

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).json({ error: 'Internal server error' })
})

app.listen(3000, () => {
    console.log('Server running on port 3000')
})
