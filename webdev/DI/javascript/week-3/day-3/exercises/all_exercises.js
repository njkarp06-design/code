// day3normal.js
// Exercise 1
const h1 = document.querySelector("h1")
console.log(h1)
const article = document.querySelector("article")
const paragraphs = article.querySelectorAll("p")
article.removeChild(paragraphs[paragraphs.length - 1])
const h2 = document.querySelector("h2")
h2.addEventListener("click", function() {
    h2.style.backgroundColor = "red"
})
const h3 = document.querySelector("h3")
h3.addEventListener("click", function() {
    h3.style.display = "none"
})
const boldBtn = document.getElementById("boldBtn")
boldBtn.addEventListener("click", function() {
    const paras = article.querySelectorAll("p")
    for (let i = 0; i < paras.length; i++) {
        paras[i].style.fontWeight = "bold"
    }
})
// bonus
h1.addEventListener("mouseover", function() {
    const randomSize = Math.floor(Math.random() * 100)
    h1.style.fontSize = randomSize + "px"
})
// bonus
const allParas = article.querySelectorAll("p")
allParas[1].addEventListener("mouseover", function() {
    allParas[1].classList.add("fade")
})

// Exercise 2
const form = document.getElementById("myForm")
console.log(form)
const fname = document.getElementById("fname")
const lname = document.getElementById("lname")
console.log(fname, lname)
const fnameByName = document.getElementsByName("firstname")[0]
const lnameByName = document.getElementsByName("lastname")[0]
console.log(fnameByName, lnameByName)
const ul = document.querySelector(".usersAnswer")
form.addEventListener("submit", function(event) {
    event.preventDefault()
    const firstValue = fname.value
    const lastValue = lname.value
    if (firstValue !== "" && lastValue !== "") {
        const li1 = document.createElement("li")
        const li2 = document.createElement("li")
        li1.textContent = firstValue
        li2.textContent = lastValue
        ul.appendChild(li1)
        ul.appendChild(li2)
    }
})

// Exercise 3
let allBoldItems
function getBoldItems() {
    const boldPara = document.getElementById("boldPara")
    allBoldItems = boldPara.querySelectorAll("strong")
}
function highlight() {
    getBoldItems()
    for (let i = 0; i < allBoldItems.length; i++) {
        allBoldItems[i].style.color = "blue"
    }
}
function returnItemsToDefault() {
    for (let i = 0; i < allBoldItems.length; i++) {
        allBoldItems[i].style.color = "black"
    }
}
const boldPara = document.getElementById("boldPara")
boldPara.addEventListener("mouseover", highlight)
boldPara.addEventListener("mouseout", returnItemsToDefault)

// Exercise 4
const sphereForm = document.getElementById("MyForm")
sphereForm.addEventListener("submit", function(event) {
    event.preventDefault()
    const radius = parseFloat(document.getElementById("radius").value)
    const volume = (4/3) * Math.PI * Math.pow(radius, 3)
    document.getElementById("volume").value = volume.toFixed(2)
})


// day3normal2.js
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
