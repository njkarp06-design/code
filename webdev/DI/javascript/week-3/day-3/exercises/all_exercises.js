/* =====================================
   START (HTML): day3normal.html
   =====================================
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Day 3</title>
  <style>
    body { padding-top: 30px; }
    label, input { display: block; }

    @keyframes fadeOut {
      from { opacity: 1; }
      to { opacity: 0; }
    }
    .fade {
      animation: fadeOut 1s forwards;
    }
  </style>
</head>
<body>

  <article>
    <h1>Some Facts</h1>
    <h2>The Chocolate</h2>
    <h3>History of the chocolate</h3>
    <p>Chocolate is made from tropical Theobroma cacao tree seeds.
    Its earliest use dates back to the Olmec civilization in Mesoamerica.</p>
    <p>After the European discovery of the Americas, chocolate became
    very popular in the wider world, and its demand exploded.</p>
    <p>Chocolate has since become a popular food product that millions enjoy every day,
    thanks to its unique, rich, and sweet taste.</p>
    <p>But what effect does eating chocolate have on our health?</p>
  </article>
  <button id="boldBtn">Make paragraphs bold</button>

  <hr>

  <form id="myForm">
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="firstname"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lastname"><br><br>
    <input type="submit" value="Submit" id="submit">
  </form>
  <ul class="usersAnswer"></ul>

  <hr>

  <p id="boldPara"><strong>Hello</strong> I hope you are enjoying <strong>this</strong> class. At the
  <strong>end</strong> you <strong>will</strong> be great Developers!
  <strong>Enjoy</strong> the <strong>JavaScript </strong> lessons</p>

  <hr>

  <p>Input radius value and get the volume of a sphere.</p>
  <form id="MyForm">
    <label for="radius">Radius</label><input type="text" name="radius" id="radius" required>
    <label for="volume">Volume</label><input type="text" name="volume" id="volume">
    <input type="submit" value="Calculate" id="calcSubmit">
  </form>

  <script src="day3normal.js"></script>
</body>
</html>
   =====================================
   END (HTML): day3normal.html
   ===================================== */


// =====================================
// START: day3normal.js
// =====================================
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
// =====================================
// END: day3normal.js
// =====================================


/* =====================================
   START (HTML): day3normal2.html
   =====================================
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Day 3 part 2</title>
  <style>
    #container p {
      background: yellow;
      color: red;
    }
    #container2 {
      width: 400px;
      height: 400px;
      position: relative;
      background: yellow;
    }
    #animate {
      width: 50px;
      height: 50px;
      position: absolute;
      background-color: red;
    }
  </style>
</head>
<body>

  <div id="container"></div>
  <button id="clear">Clear Interval</button>

  <br><br>

  <p><button onclick="myMove()">Click Me</button></p>
  <div id="container2">
    <div id="animate"></div>
  </div>

  <script src="day3normal2.js"></script>
</body>
</html>
   =====================================
   END (HTML): day3normal2.html
   ===================================== */


// =====================================
// START: day3normal2.js
// =====================================
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
// =====================================
// END: day3normal2.js
// =====================================
