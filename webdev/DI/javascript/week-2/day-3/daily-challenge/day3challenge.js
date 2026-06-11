let currentNoun = ""
let currentAdj = ""
let currentPerson = ""
let currentVerb = ""
let currentPlace = ""
let lastStory = -1

const stories = [
    () => `One day, ${currentPerson} decided to ${currentVerb} to ${currentPlace} with a ${currentAdj} ${currentNoun}. Everyone stared.`,
    () => `The ${currentAdj} ${currentNoun} at ${currentPlace} belonged to ${currentPerson}. Nobody dared to ${currentVerb} near it.`,
    () => `${currentPerson} tried to ${currentVerb} but tripped over a ${currentAdj} ${currentNoun} at ${currentPlace}. What a day.`,
    () => `At ${currentPlace}, ${currentPerson} found a ${currentAdj} ${currentNoun} and decided to ${currentVerb} all the way home.`
]

document.getElementById("libform").addEventListener("submit", function(event) {
    event.preventDefault()

    let noun = document.getElementById("noun").value
    let adjective = document.getElementById("adjective").value
    let person = document.getElementById("person").value
    let verb = document.getElementById("verb").value
    let place = document.getElementById("place").value

    if (noun === "" || adjective === "" || person === "" || verb === "" || place === "") {
        alert("Please fill in all the fields!")
        return
    }

    currentNoun = noun
    currentAdj = adjective
    currentPerson = person
    currentVerb = verb
    currentPlace = place

    let storyIndex = Math.floor(Math.random() * stories.length)
    lastStory = storyIndex
    document.getElementById("story").textContent = stories[storyIndex]()

    document.getElementById("shuffle-btn").style.display = "inline"
})

document.getElementById("shuffle-btn").addEventListener("click", function() {
    let storyIndex = Math.floor(Math.random() * stories.length)

    while (storyIndex === lastStory) {
        storyIndex = Math.floor(Math.random() * stories.length)
    }

    lastStory = storyIndex
    document.getElementById("story").textContent = stories[storyIndex]()
})
