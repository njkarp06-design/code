/* =====================================
   START (HTML): robo-friends-deluxe-mini-project/miniproject.html
   =====================================
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>RoboFriends Deluxe</title>
  <link rel="stylesheet" href="miniproject.css" />
</head>

<body>

  <h1>🤖 RoboFriends Deluxe</h1>

  <div class="controls">
    <input type="text" id="searchBox" placeholder="Search robots..." />

    <select id="sortSelect">
      <option value="none">Sort by</option>
      <option value="az">Name A to Z</option>
      <option value="za">Name Z to A</option>
    </select>

    <button id="toggleMode">Toggle Dark/Light</button>
  </div>

  <div class="container" id="robotContainer"></div>

  <script src="miniproject.js"></script>
</body>
</html>
   =====================================
   END (HTML): robo-friends-deluxe-mini-project/miniproject.html
   ===================================== */


/* =====================================
   START (CSS): robo-friends-deluxe-mini-project/miniproject.css
   =====================================
:root {
  --bg: #0d0d0d;
  --text: #ffffff;
  --card-bg: rgba(255, 255, 255, 0.1);
  --card-hover: rgba(255, 255, 255, 0.2);
}

body.light {
  --bg: #f2f2f2;
  --text: #000000;
  --card-bg: rgba(0, 0, 0, 0.05);
  --card-hover: rgba(0, 0, 0, 0.1);
}

body {
  margin: 0;
  font-family: 'Trebuchet MS', sans-serif;
  background: var(--bg);
  color: var(--text);
  transition: background 0.3s ease, color 0.3s ease;
  text-align: center;
}

h1 {
  font-size: 3rem;
  margin-top: 20px;
  letter-spacing: 3px;
}

.controls {
  margin: 20px auto;
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
}

input, select, button {
  padding: 12px 20px;
  border-radius: 8px;
  border: none;
  font-size: 1rem;
}

button {
  cursor: pointer;
  background: #4caf50;
  color: white;
  transition: 0.2s;
}

button:hover {
  background: #45a049;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
}

.card {
  background: var(--card-bg);
  backdrop-filter: blur(6px);
  border-radius: 12px;
  padding: 20px;
  width: 220px;
  text-align: center;
  transition: transform 0.2s ease, background 0.3s ease;
  animation: fadeIn 0.4s ease;
}

.card:hover {
  transform: scale(1.05);
  background: var(--card-hover);
}

.card img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
   =====================================
   END (CSS): robo-friends-deluxe-mini-project/miniproject.css
   ===================================== */


// =====================================
// START: robo-friends-deluxe-mini-project/miniproject.js
// =====================================
const robots = [
  { id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz', image: 'https://robohash.org/1?200x200' },
  { id: 2, name: 'Ervin Howell', username: 'Antonette', email: 'Shanna@melissa.tv', image: 'https://robohash.org/2?200x200' },
  { id: 3, name: 'Clementine Bauch', username: 'Samantha', email: 'Nathan@yesenia.net', image: 'https://robohash.org/3?200x200' },
  { id: 4, name: 'Patricia Lebsack', username: 'Karianne', email: 'Julianne.OConner@kory.org', image: 'https://robohash.org/4?200x200' },
  { id: 5, name: 'Chelsey Dietrich', username: 'Kamren', email: 'Lucio_Hettinger@annie.ca', image: 'https://robohash.org/5?200x200' },
  { id: 6, name: 'Mrs. Dennis Schulist', username: 'Leopoldo_Corkery', email: 'Karley_Dach@jasper.info', image: 'https://robohash.org/6?200x200' },
  { id: 7, name: 'Kurtis Weissnat', username: 'Elwyn.Skiles', email: 'Telly.Hoeger@billy.biz', image: 'https://robohash.org/7?200x200' },
  { id: 8, name: 'Nicholas Runolfsdottir V', username: 'Maxime_Nienow', email: 'Sherwood@rosamond.me', image: 'https://robohash.org/8?200x200' },
  { id: 9, name: 'Glenna Reichert', username: 'Delphine', email: 'Chaim_McDermott@dana.io', image: 'https://robohash.org/9?200x200' },
  { id: 10, name: 'Clementina DuBuque', username: 'Moriah.Stanton', email: 'Rey.Padberg@karina.biz', image: 'https://robohash.org/10?200x200' }
];

const container = document.getElementById("robotContainer");
const searchBox = document.getElementById("searchBox");
const sortSelect = document.getElementById("sortSelect");
const toggleMode = document.getElementById("toggleMode");

let currentList = [...robots];

function displayRobots(list) {
  container.innerHTML = "";
  list.forEach(robot => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${robot.image}" alt="${robot.name}">
      <h2>${robot.name}</h2>
      <p>@${robot.username}</p>
      <p>${robot.email}</p>
    `;

    container.appendChild(card);
  });
}

function filterRobots() {
  const searchValue = searchBox.value.toLowerCase();
  currentList = robots.filter(robot =>
    robot.name.toLowerCase().includes(searchValue)
  );
  applySort();
}

function applySort() {
  const sortType = sortSelect.value;

  if (sortType === "az") {
    currentList.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortType === "za") {
    currentList.sort((a, b) => b.name.localeCompare(a.name));
  }

  displayRobots(currentList);
}

searchBox.addEventListener("input", filterRobots);
sortSelect.addEventListener("change", applySort);

toggleMode.addEventListener("click", () => {
  document.body.classList.toggle("light");
});

displayRobots(currentList);
// =====================================
// END: robo-friends-deluxe-mini-project/miniproject.js
// =====================================
