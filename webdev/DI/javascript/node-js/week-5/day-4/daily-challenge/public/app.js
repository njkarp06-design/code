let score = 0
let currentGame = null

async function loadGame() {
    document.getElementById("feedback").textContent = ""
    document.getElementById("feedback").style.color = ""
    document.getElementById("options").innerHTML = ""
    document.getElementById("nextBtn").style.display = "none"

    let response = await fetch("/game")
    let data = await response.json()
    currentGame = data

    document.getElementById("emoji").textContent = data.emoji

    for (let i = 0; i < data.options.length; i++) {
        let btn = document.createElement("button")
        btn.textContent = data.options[i]
        btn.type = "button"
        btn.addEventListener("click", function() {
            submitGuess(data.options[i])
        })
        document.getElementById("options").appendChild(btn)
    }
}

async function submitGuess(guess) {
    let buttons = document.querySelectorAll("#options button")
    buttons.forEach(btn => btn.disabled = true)

    let response = await fetch("/guess", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ guess: guess, correctName: currentGame.correctName })
    })
    let data = await response.json()

    if (data.correct) {
        score++
        document.getElementById("feedback").textContent = "Correct! 🎉"
        document.getElementById("feedback").style.color = "green"
    } else {
        document.getElementById("feedback").textContent = `Wrong! It was ${currentGame.correctName} 😔`
        document.getElementById("feedback").style.color = "red"
    }

    document.getElementById("score").textContent = `Score: ${score}`
    document.getElementById("nextBtn").style.display = "inline-block"
}

async function saveScore() {
    let name = document.getElementById("playerName").value
    if (!name) {
        alert("Enter your name first!")
        return
    }

    await fetch("/leaderboard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: name, score: score })
    })

    loadLeaderboard()
}

async function loadLeaderboard() {
    let response = await fetch("/leaderboard")
    let data = await response.json()

    let list = document.getElementById("leaderboardList")
    list.innerHTML = ""

    if (data.length === 0) {
        let li = document.createElement("li")
        li.textContent = "No scores yet!"
        list.appendChild(li)
        return
    }

    for (let i = 0; i < data.length; i++) {
        let li = document.createElement("li")
        li.textContent = `${data[i].name} - ${data[i].score}`
        list.appendChild(li)
    }
}

document.getElementById("nextBtn").addEventListener("click", loadGame)
document.getElementById("saveScoreBtn").addEventListener("click", saveScore)

loadGame()
loadLeaderboard()
