import random

wordslist = ['correction', 'childish', 'beach', 'python', 'assertive', 'interference', 'complete', 'share', 'credit card', 'rush', 'south']
word = random.choice(wordslist)

### YOUR CODE STARTS FROM HERE ###

stages = [
    """
  -----
  |   |
      |
      |
      |
      |
 =========
    """,
    """
  -----
  |   |
  O   |
      |
      |
      |
 =========
    """,
    """
  -----
  |   |
  O   |
  |   |
      |
      |
 =========
    """,
    """
  -----
  |   |
  O   |
 /|   |
      |
      |
 =========
    """,
    """
  -----
  |   |
  O   |
 /|\  |
      |
      |
 =========
    """,
    """
  -----
  |   |
  O   |
 /|\  |
 /    |
      |
 =========
    """,
    """
  -----
  |   |
  O   |
 /|\  |
 / \  |
      |
 =========
    """
]


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


def solved(word, guessed):
    for letter in word:
        if letter != " " and letter not in guessed:
            return False
    return True


def play():
    word = random.choice(wordslist)
    guessed = []
    wrong = 0

    print("Welcome to Hangman!\n")

    while wrong < 6:
        print(stages[wrong])
        show_word(word, guessed)

        if solved(word, guessed):
            print("\nYou win! The word was: " + word)
            return

        bad = [g for g in guessed if g not in word]
        if bad:
            print("Wrong guesses:", ", ".join(bad))

        guess = input("\nGuess a letter: ").lower()

        if len(guess) != 1 or not guess.isalpha():
            print("Enter a single letter.")
            continue

        if guess in guessed:
            print("Already guessed that!")
            continue

        guessed.append(guess)

        if guess not in word:
            wrong += 1
        else:
            print("Good guess!")

    print(stages[6])
    show_word(word, guessed)
    print("\nGame over. The word was: " + word)


play()
