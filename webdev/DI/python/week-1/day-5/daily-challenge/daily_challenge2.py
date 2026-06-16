import random

wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit card', 'rush', 'south']
word = random.choice(wordslist)

### YOUR CODE STARTS FROM HERE ###

body_parts = ["head", "body", "left arm", "right arm", "left leg", "right leg"]

def show_word(word, guessed):
    result = ""
    for letter in word:
        if letter == " ":
            result += "  "
        elif letter in guessed:
            result += letter + " "
        else:
            result += "* "
    print(result.strip())

def word_solved(word, guessed):
    for letter in word:
        if letter != " " and letter not in guessed:
            return False
    return True

word = random.choice(wordslist)
guessed = []
wrong = 0

print("Welcome to Hangman!")

while wrong < 6:
    print("\nWord: ", end="")
    show_word(word, guessed)

    if word_solved(word, guessed):
        print("You guessed it! The word was: " + word)
        break

    bad = [g for g in guessed if g not in word]
    if bad:
        print("Wrong guesses:", ", ".join(bad))
    print("Body parts added:", ", ".join(body_parts[:wrong]) if wrong > 0 else "none")

    guess = input("Guess a letter: ").lower()

    if len(guess) != 1 or not guess.isalpha():
        print("Enter a single letter.")
        continue

    if guess in guessed:
        print("Already tried that letter.")
        continue

    guessed.append(guess)

    if guess not in word:
        print("Wrong! Added: " + body_parts[wrong])
        wrong += 1
    else:
        print("Correct!")

if wrong == 6:
    print("\nGame over! The word was: " + word)
    print("All body parts on the gallows: " + ", ".join(body_parts))
