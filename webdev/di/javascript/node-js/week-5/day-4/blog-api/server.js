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
