const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`

function toJs() {
    return new Promise((resolve, reject) => {
        let morseObj = JSON.parse(morse)
        if (Object.keys(morseObj).length === 0) {
            reject("Morse object is empty")
        } else {
            resolve(morseObj)
        }
    })
}

function toMorse(morseJS) {
    return new Promise((resolve, reject) => {
        let input = prompt("Enter a word or sentence:")
        let chars = input.toLowerCase().split("")
        let result = []

        for (let i = 0; i < chars.length; i++) {
            if (chars[i] === " ") continue
            if (!morseJS[chars[i]]) {
                reject("Character not found in morse: " + chars[i])
                return
            }
            result.push(morseJS[chars[i]])
        }

        resolve(result)
    })
}

function joinWords(morseTranslation) {
    let output = document.getElementById("output")
    output.textContent = morseTranslation.join("\n")
    output.style.whiteSpace = "pre"
}

toJs()
    .then((morseJS) => toMorse(morseJS))
    .then((morseTranslation) => joinWords(morseTranslation))
    .catch(error => console.log(error))
