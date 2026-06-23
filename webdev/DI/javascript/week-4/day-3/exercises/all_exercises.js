// Exercise 1 and 2 are in day3normal.html (GET and POST forms)

// Exercise 3
const marioGame = {
  detail : "An amazing game!",
  characters : {
      mario : {
        description:"Small and jumpy. Likes princesses.",
        height: 10,
        weight: 3,
        speed: 12,
      },
      bowser : {
        description: "Big and green, Hates princesses.",
        height: 16,
        weight: 6,
        speed: 4,
      },
      princessPeach : {
        description: "Beautiful princess.",
        height: 12,
        weight: 2,
        speed: 2,
      }
  },
}

const marioJSON = JSON.stringify(marioGame)
console.log(marioJSON)

// nested objects get converted into JSON as well, it all becomes one string

const marioPretty = JSON.stringify(marioGame, null, 2)
console.log(marioPretty)

debugger
const back = JSON.parse(marioJSON)
console.log(back)
