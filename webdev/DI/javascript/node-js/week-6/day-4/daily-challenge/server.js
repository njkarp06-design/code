const express = require("express")
const app = express()

app.use(express.json())
app.use(express.static("public"))

const emojis = [
    { emoji: '😀', name: 'Smile' },
    { emoji: '🐶', name: 'Dog' },
    { emoji: '🌮', name: 'Taco' },
    { emoji: '🍕', name: 'Pizza' },
    { emoji: '🚀', name: 'Rocket' },
    { emoji: '🌈', name: 'Rainbow' },
    { emoji: '🦁', name: 'Lion' },
    { emoji: '🍎', name: 'Apple' },
    { emoji: '🎸', name: 'Guitar' },
    { emoji: '🦊', name: 'Fox' },
    { emoji: '🍦', name: 'Ice Cream' },
    { emoji: '⚽', name: 'Soccer Ball' },
    { emoji: '🎃', name: 'Pumpkin' },
    { emoji: '🌺', name: 'Flower' },
    { emoji: '🐱', name: 'Cat' },
    { emoji: '🍔', name: 'Burger' },
    { emoji: '🎹', name: 'Piano' },
    { emoji: '🐠', name: 'Fish' },
    { emoji: '🧁', name: 'Cupcake' },
    { emoji: '🦋', name: 'Butterfly' }
]

let leaderboard = []

app.get("/game", (req, res) => {
    let correctIndex = Math.floor(Math.random() * emojis.length)
    let correct = emojis[correctIndex]

    let wrong = emojis.filter((e, i) => i !== correctIndex)
    wrong = wrong.sort(() => Math.random() - 0.5).slice(0, 3)

    let options = [...wrong.map(e => e.name), correct.name]
    options = options.sort(() => Math.random() - 0.5)

    res.json({
        emoji: correct.emoji,
        correctName: correct.name,
        options: options
    })
})

app.post("/guess", (req, res) => {
    let { guess, correctName } = req.body
    let correct = guess === correctName
    res.json({ correct })
})

app.post("/leaderboard", (req, res) => {
    let { name, score } = req.body
    leaderboard.push({ name, score })
    leaderboard.sort((a, b) => b.score - a.score)
    if (leaderboard.length > 10) {
        leaderboard = leaderboard.slice(0, 10)
    }
    res.json({ message: "Score saved!" })
})

app.get("/leaderboard", (req, res) => {
    res.json(leaderboard)
})

app.listen(3000, () => {
    console.log("Emoji game running on http://localhost:3000")
})
