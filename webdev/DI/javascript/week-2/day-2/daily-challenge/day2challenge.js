const planets = [
    { name: "Mercury", color: "mercury", moons: 0 },
    { name: "Venus", color: "venus", moons: 0 },
    { name: "Earth", color: "earth", moons: 1 },
    { name: "Mars", color: "mars", moons: 2 },
    { name: "Jupiter", color: "jupiter", moons: 95 },
    { name: "Saturn", color: "saturn", moons: 83 },
    { name: "Uranus", color: "uranus", moons: 27 },
    { name: "Neptune", color: "neptune", moons: 16 }
]

const section = document.querySelector(".listPlanets")

for (let i = 0; i < planets.length; i++) {
    const planetDiv = document.createElement("div")
    planetDiv.classList.add("planet", planets[i].color)
    planetDiv.textContent = planets[i].name

    for (let j = 0; j < planets[i].moons; j++) {
        const moonDiv = document.createElement("div")
        moonDiv.classList.add("moon")
        moonDiv.style.left = (j * 35) + "px"
        moonDiv.style.top = "110px"
        planetDiv.appendChild(moonDiv)
    }

    section.appendChild(planetDiv)
}
