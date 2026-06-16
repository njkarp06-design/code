// blog-api/server.js
const express = require("express")
const app = express()

app.use(express.json())

let posts = [
    { id: 1, title: "My First Post", content: "This is the content of the first post." },
    { id: 2, title: "Learning Node.js", content: "Node.js is really fun to learn." },
    { id: 3, title: "Express is great", content: "Building APIs with Express is straightforward." }
]

let nextId = 4

app.get("/posts", (req, res) => {
    res.json(posts)
})

app.get("/posts/:id", (req, res) => {
    let post = posts.find(p => p.id === parseInt(req.params.id))
    if (!post) {
        return res.status(404).json({ message: "Post not found" })
    }
    res.json(post)
})

app.post("/posts", (req, res) => {
    let newPost = {
        id: nextId,
        title: req.body.title,
        content: req.body.content
    }
    nextId++
    posts.push(newPost)
    res.status(201).json(newPost)
})

app.put("/posts/:id", (req, res) => {
    let post = posts.find(p => p.id === parseInt(req.params.id))
    if (!post) {
        return res.status(404).json({ message: "Post not found" })
    }
    post.title = req.body.title || post.title
    post.content = req.body.content || post.content
    res.json(post)
})

app.delete("/posts/:id", (req, res) => {
    let index = posts.findIndex(p => p.id === parseInt(req.params.id))
    if (index === -1) {
        return res.status(404).json({ message: "Post not found" })
    }
    posts.splice(index, 1)
    res.json({ message: "Post deleted" })
})

app.use((req, res) => {
    res.status(404).json({ message: "Route not found" })
})

app.use((err, req, res, next) => {
    res.status(500).json({ message: "Server error" })
})

app.listen(3000, () => {
    console.log("Server running on port 3000")
})


// book-api/app.js
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


// crud-api/data/dataService.js
const axios = require("axios")

async function fetchPosts() {
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
    return response.data
}

module.exports = fetchPosts


// crud-api/app.js
const express = require("express")
const fetchPosts = require("./data/dataService")

const app = express()

app.get("/posts", async (req, res) => {
    try {
        const posts = await fetchPosts()
        console.log("Data successfully retrieved and sent as response")
        res.json(posts)
    } catch (error) {
        res.status(500).json({ message: "Error fetching data" })
    }
})

app.listen(5000, () => {
    console.log("Server running on port 5000")
})
