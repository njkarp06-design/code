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