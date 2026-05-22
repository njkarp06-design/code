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