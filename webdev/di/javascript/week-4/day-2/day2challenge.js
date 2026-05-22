const API_KEY = "YOUR_API_KEY"

async function loadCurrencies() {
    try {
        let response = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/codes`)
        let data = await response.json()

        let fromSelect = document.getElementById("fromCurrency")
        let toSelect = document.getElementById("toCurrency")

        data.supported_codes.forEach(code => {
            let optionFrom = document.createElement("option")
            optionFrom.value = code[0]
            optionFrom.textContent = code[0] + " - " + code[1]
            fromSelect.appendChild(optionFrom)

            let optionTo = document.createElement("option")
            optionTo.value = code[0]
            optionTo.textContent = code[0] + " - " + code[1]
            toSelect.appendChild(optionTo)
        })

        toSelect.value = "USD"

    } catch (error) {
        console.log("Error loading currencies:", error)
    }
}

async function convertCurrency() {
    try {
        let amount = document.getElementById("amount").value
        let from = document.getElementById("fromCurrency").value
        let to = document.getElementById("toCurrency").value

        let response = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${from}/${to}/${amount}`)
        let data = await response.json()

        document.getElementById("result").textContent = `${amount} ${from} = ${data.conversion_result} ${to}`

    } catch (error) {
        console.log("Error converting:", error)
    }
}

document.getElementById("convertBtn").addEventListener("click", convertCurrency)

document.getElementById("switchBtn").addEventListener("click", function() {
    let fromSelect = document.getElementById("fromCurrency")
    let toSelect = document.getElementById("toCurrency")

    let temp = fromSelect.value
    fromSelect.value = toSelect.value
    toSelect.value = temp

    convertCurrency()
})

loadCurrencies()
