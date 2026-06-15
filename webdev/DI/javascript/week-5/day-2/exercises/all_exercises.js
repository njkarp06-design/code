/* =====================================
   START (HTML): starwars-character-generator-mini-project/miniproject.html
   =====================================
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Star Wars AJAX App</title>
  <link rel="stylesheet" href="miniproject.css">
</head>

<body>
  <div class="container">
    <h1>Star Wars Character Generator</h1>

    <button id="btn">Get Random Character</button>

    <div class="layout">
      <div id="output" class="hidden"></div>

      <div id="history">
        <h3>Previous Characters</h3>
        <ul id="history-list"></ul>
      </div>
    </div>
  </div>

  <script src="miniproject.js"></script>
</body>
</html>
   =====================================
   END (HTML): starwars-character-generator-mini-project/miniproject.html
   ===================================== */


/* =====================================
   START (CSS): starwars-character-generator-mini-project/miniproject.css
   =====================================
body {
  background: #000;
  color: #ffe81f;
  font-family: Arial, sans-serif;
  text-align: center;
  padding-top: 50px;
}

.container {
  width: 800px;
  margin: auto;
}

button {
  padding: 10px 20px;
  background: #ffe81f;
  border: none;
  cursor: pointer;
  font-size: 18px;
  margin-bottom: 20px;
  transition: transform 0.1s ease, box-shadow 0.1s ease;
}

button:active {
  transform: scale(0.97);
  box-shadow: 0 0 10px #ffe81f88;
}

.layout {
  display: flex;
  gap: 20px;
  margin-top: 20px;
  align-items: flex-start;
  justify-content: center;
}

#output {
  background: #111;
  padding: 20px;
  border-radius: 10px;
  width: 350px;
  min-height: 200px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

#output.hidden {
  transform: translateY(10px);
  opacity: 0;
}

#output.show {
  transform: translateY(0);
  opacity: 1;
}

.loading {
  font-size: 40px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  100% { transform: rotate(360deg); }
}

.error {
  color: #ff4d4d;
  font-size: 20px;
}

.char-img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  border: 3px solid #ffe81f;
  margin-bottom: 15px;
}

#history {
  background: #111;
  padding: 15px;
  border-radius: 10px;
  width: 250px;
  max-height: 350px;
  overflow-y: auto;
}

#history h3 {
  margin-top: 0;
  margin-bottom: 10px;
}

#history-list {
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
  font-size: 14px;
}

#history-list li {
  margin-bottom: 6px;
  cursor: pointer;
}

#history-list li span {
  color: #ffe81f;
}
   =====================================
   END (CSS): starwars-character-generator-mini-project/miniproject.css
   ===================================== */


// =====================================
// START: starwars-character-generator-mini-project/miniproject.js
// =====================================
// DOM elements
const btn = document.getElementById("btn");
const output = document.getElementById("output");
const historyList = document.getElementById("history-list");

let history = [];

// Character images (add more if you want)
const characterImages = {
  "Luke Skywalker": "https://starwars-visualguide.com/assets/img/characters/1.jpg",
  "C-3PO": "https://starwars-visualguide.com/assets/img/characters/2.jpg",
  "R2-D2": "https://starwars-visualguide.com/assets/img/characters/3.jpg",
};

function getCharacterImage(name) {
  return characterImages[name] || "https://starwars-visualguide.com/assets/img/placeholder.jpg";
}

function getRandomId() {
  return Math.floor(Math.random() * 83) + 1;
}

function showLoading() {
  output.classList.remove("show");
  output.classList.add("hidden");
  output.innerHTML = `
    <i class="fas fa-spinner loading"></i>
    <p>Loading character...</p>
  `;
}

function showError() {
  output.innerHTML = `
    <p class="error">⚠️ Could not load character. Try again.</p>
  `;
}

function addToHistory(character, homeworld) {
  history.unshift({ name: character.name, homeworld });
  history = history.slice(0, 10);
  renderHistory();
}

function renderHistory() {
  historyList.innerHTML = "";
  history.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `<span>${item.name}</span> – ${item.homeworld}`;
    historyList.appendChild(li);
  });
}

function showCharacter(data, homeworld) {
  const imgUrl = getCharacterImage(data.name);

  output.innerHTML = `
    <img src="${imgUrl}" alt="${data.name}" class="char-img" />
    <h2>${data.name}</h2>
    <p><strong>Height:</strong> ${data.height}</p>
    <p><strong>Gender:</strong> ${data.gender}</p>
    <p><strong>Birth Year:</strong> ${data.birth_year}</p>
    <p><strong>Homeworld:</strong> ${homeworld}</p>
  `;

  addToHistory(data, homeworld);

  requestAnimationFrame(() => {
    output.classList.remove("hidden");
    output.classList.add("show");
  });
}

function fetchCharacter() {
  const id = getRandomId();
  showLoading();

  fetch(`https://www.swapi.tech/api/people/${id}`)
    .then(res => res.json())
    .then(data => {
      const character = data.result.properties;

      return fetch(character.homeworld)
        .then(res => res.json())
        .then(worldData => {
          const homeworld = worldData.result.properties.name;
          showCharacter(character, homeworld);
        });
    })
    .catch(() => {
      showError();
    });
}

btn.addEventListener("click", fetchCharacter);
// =====================================
// END: starwars-character-generator-mini-project/miniproject.js
// =====================================
