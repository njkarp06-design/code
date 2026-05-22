const express = require('express')
const app = express()

app.use(express.json())

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello From Express' })
})

app.post('/api/world', (req, res) => {
    console.log(req.body)
    res.json({ message: `I received your POST request. This is what you sent me: ${req.body.value}` })
})

app.listen(5000, () => {
    console.log('Server running on port 5000')
})
