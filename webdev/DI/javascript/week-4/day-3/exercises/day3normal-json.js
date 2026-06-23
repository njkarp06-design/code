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

// the nested objects (characters, mario, bowser...) get turned into JSON too,
// the whole thing becomes one big string

const marioPretty = JSON.stringify(marioGame, null, 2)
console.log(marioPretty)

debugger
const back = JSON.parse(marioJSON)
console.log(back)
