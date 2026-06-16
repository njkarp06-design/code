// exercise1/routes/index.js
const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send("Welcome to the Homepage!")
})

router.get("/about", (req, res) => {
    res.send("Welcome to the About Us page!")
})

module.exports = router


// exercise1/app.js
const express = require("express")
const router = require("./routes/index")

const app = express()

app.use("/", router)

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000")
})


// exercise2/routes/todos.js
const express = require("express")
const router = express.Router()

const todos = []
let nextId = 1

router.get("/", (req, res) => {
    res.json(todos)
})

router.post("/", (req, res) => {
    let newTodo = {
        id: nextId,
        task: req.body.task,
        done: false
    }
    nextId++
    todos.push(newTodo)
    res.status(201).json(newTodo)
})

router.put("/:id", (req, res) => {
    let todo = todos.find(t => t.id === parseInt(req.params.id))
    if (!todo) {
        return res.status(404).json({ message: "Todo not found" })
    }
    todo.task = req.body.task || todo.task
    todo.done = req.body.done !== undefined ? req.body.done : todo.done
    res.json(todo)
})

router.delete("/:id", (req, res) => {
    let index = todos.findIndex(t => t.id === parseInt(req.params.id))
    if (index === -1) {
        return res.status(404).json({ message: "Todo not found" })
    }
    todos.splice(index, 1)
    res.json({ message: "Todo deleted" })
})

module.exports = router


// exercise2/app.js
const express = require("express")
const todosRouter = require("./routes/todos")

const app = express()

app.use(express.json())
app.use("/todos", todosRouter)

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000")
})


// exercise3/routes/books.js
const express = require("express")
const router = express.Router()

const books = []
let nextId = 1

router.get("/", (req, res) => {
    res.json(books)
})

router.post("/", (req, res) => {
    let newBook = {
        id: nextId,
        title: req.body.title,
        author: req.body.author,
        publishedYear: req.body.publishedYear
    }
    nextId++
    books.push(newBook)
    res.status(201).json(newBook)
})

router.put("/:id", (req, res) => {
    let book = books.find(b => b.id === parseInt(req.params.id))
    if (!book) {
        return res.status(404).json({ message: "Book not found" })
    }
    book.title = req.body.title || book.title
    book.author = req.body.author || book.author
    book.publishedYear = req.body.publishedYear || book.publishedYear
    res.json(book)
})

router.delete("/:id", (req, res) => {
    let index = books.findIndex(b => b.id === parseInt(req.params.id))
    if (index === -1) {
        return res.status(404).json({ message: "Book not found" })
    }
    books.splice(index, 1)
    res.json({ message: "Book deleted" })
})

module.exports = router


// exercise3/app.js
const express = require("express")
const booksRouter = require("./routes/books")

const app = express()

app.use(express.json())
app.use("/books", booksRouter)

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000")
})
