async function startQuiz() {
    let response = await fetch("/quiz")
    let data = await response.json()

    document.getElementById("scoreSection").style.display = "none"
    document.getElementById("quizSection").style.display = "block"
    document.getElementById("feedback").textContent = ""

    showQuestion(data)
}

function showQuestion(data) {
    document.getElementById("progress").textContent = `Question ${data.questionNumber} of ${data.total}`
    document.getElementById("question").textContent = data.question
    document.getElementById("answerInput").value = ""
    document.getElementById("answerInput").focus()
    document.getElementById("feedback").textContent = ""
}

document.getElementById("answerForm").addEventListener("submit", async function(event) {
    event.preventDefault()

    let answer = document.getElementById("answerInput").value
    if (!answer) return

    let response = await fetch("/quiz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answer: answer })
    })
    let data = await response.json()

    if (data.correct) {
        document.getElementById("feedback").textContent = "Correct! ✅"
        document.getElementById("feedback").style.color = "green"
    } else {
        document.getElementById("feedback").textContent = `Wrong! The answer was: ${data.correctAnswer} ❌`
        document.getElementById("feedback").style.color = "red"
    }

    if (data.gameOver) {
        setTimeout(async () => {
            let scoreRes = await fetch("/quiz/score")
            let scoreData = await scoreRes.json()

            document.getElementById("quizSection").style.display = "none"
            document.getElementById("scoreSection").style.display = "block"
            document.getElementById("finalScore").textContent = `You scored ${scoreData.score} out of ${scoreData.total}!`
        }, 1500)
    } else {
        setTimeout(() => {
            showQuestion(data.nextQuestion)
        }, 1500)
    }
})

document.getElementById("restartBtn").addEventListener("click", startQuiz)

startQuiz()
