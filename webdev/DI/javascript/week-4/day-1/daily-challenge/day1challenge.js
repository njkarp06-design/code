const API_KEY = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My"

async function fetchGif(category) {
    try {
        let response = await fetch(`https://api.giphy.com/v1/gifs/random?tag=${category}&rating=g&api_key=${API_KEY}`)
        let data = await response.json()

        let gifUrl = data.data.images.original.url

        let container = document.getElementById("gifContainer")

        let gifDiv = document.createElement("div")

        let img = document.createElement("img")
        img.src = gifUrl
        img.width = 300

        let deleteBtn = document.createElement("button")
        deleteBtn.textContent = "DELETE"
        deleteBtn.addEventListener("click", function() {
            gifDiv.remove()
        })

        gifDiv.appendChild(img)
        gifDiv.appendChild(deleteBtn)
        container.appendChild(gifDiv)

    } catch (error) {
        console.log("Error fetching gif:", error)
    }
}

document.getElementById("gifForm").addEventListener("submit", function(event) {
    event.preventDefault()
    let search = document.getElementById("searchInput").value
    if (search === "") return
    fetchGif(search)
})

document.getElementById("deleteAll").addEventListener("click", function() {
    document.getElementById("gifContainer").innerHTML = ""
})
