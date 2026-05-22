const express = require("express")
const router = express.Router()

const triviaQuestions = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "Which planet is known as the Red Planet?", answer: "Mars" },
    { question: "What is the largest mammal in the world?", answer: "Blue whale" },
    { question: "How many sides does a hexagon have?", answer: "6" },
    { question: "What is the chemical symbol for water?", answer: "H2O" },
    { question: "Who wrote Romeo and Juliet?", answer: "Shakespeare" },
    { question: "What is the fastest land animal?", answer: "Cheetah" },
    { question: "How many continents are there?", answer: "7" }
]

let currentQuestion = 0
let score = 0

router.get("/", (req, res) => {
    currentQuestion = 0
    score = 0
    res.json({
        question: triviaQuestions[0].question,
        questionNumber: 1,
        total: triviaQuestions.length
    })
})

router.post("/", (req, res) => {
    let userAnswer = req.body.answer.toLowerCase().trim()
    let correctAnswer = triviaQuestions[currentQuestion].answer
    let isCorrect = userAnswer === correctAnswer.toLowerCase()

    if (isCorrect) score++
    currentQuestion++

    let gameOver = currentQuestion >= triviaQuestions.length

    res.json({
        correct: isCorrect,
        correctAnswer: correctAnswer,
        score: score,
        gameOver: gameOver,
        nextQuestion: gameOver ? null : {
            question: triviaQuestions[currentQuestion].question,
            questionNumber: currentQuestion + 1,
            total: triviaQuestions.length
        }
    })
})

router.get("/score", (req, res) => {
    res.json({
        score: score,
        total: triviaQuestions.length
    })
})

module.exports = router
