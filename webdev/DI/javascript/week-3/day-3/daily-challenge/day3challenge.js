document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault()

    let name = document.getElementById("name").value
    let lastname = document.getElementById("lastname").value

    let person = {
        name: name,
        lastname: lastname
    }

    let jsonString = JSON.stringify(person)

    let output = document.getElementById("output")
    output.textContent = jsonString
})
