const express = require("express")
const app = express()

app.use(express.json())

let books = [
    { id: 1, title: "The Hobbit", author: "J.R.R. Tolkien", publishedYear: 1937 },
    { id: 2, title: "1984", author: "George Orwell", publishedYear: 1949 },
    { id: 3, title: "Clean Code", author: "Robert C. Martin", publishedYear: 2008 }
]

let nextId = 4

app.get("/api/books", (req, res) => {
    res.json(books)
})

app.get("/api/books/:bookId", (req, res) => {
    let book = books.find(b => b.id === parseInt(req.params.bookId))
    if (!book) {
        return res.status(404).json({ message: "Book not found" })
    }
    res.status(200).json(book)
})

app.post("/api/books", (req, res) => {
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

app.listen(5000, () => {
    console.log("Server running on port 5000")
})
