// Exercise 1
// part 1
setTimeout(function() {
    alert("Hello World")
}, 2000)
// part 2
setTimeout(function() {
    const container = document.getElementById("container")
    const p = document.createElement("p")
    p.textContent = "Hello World"
    container.appendChild(p)
}, 2000)
// part 3
const interval = setInterval(function() {
    const container = document.getElementById("container")
    const p = document.createElement("p")
    p.textContent = "Hello World"
    container.appendChild(p)
    if (container.querySelectorAll("p").length >= 5) {
        clearInterval(interval)
    }
}, 2000)
document.getElementById("clear").addEventListener("click", function() {
    clearInterval(interval)
})

// Exercise 2
function myMove() {
    const box = document.getElementById("animate")
    let pos = 0
    const moveInterval = setInterval(function() {
        if (pos >= 350) {
            clearInterval(moveInterval)
        } else {
            pos++
            box.style.left = pos + "px"
        }
    }, 1)
}
