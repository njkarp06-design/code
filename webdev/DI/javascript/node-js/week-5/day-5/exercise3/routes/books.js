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
