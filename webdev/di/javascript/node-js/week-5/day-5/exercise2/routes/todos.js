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
