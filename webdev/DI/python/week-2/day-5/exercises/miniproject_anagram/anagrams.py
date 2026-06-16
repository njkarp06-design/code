from anagram_checker import AnagramChecker

checker = AnagramChecker()

while True:
    print("\n--- Anagram Checker ---")
    print("1. Enter a word")
    print("2. Exit")

    choice = input("Choose an option: ").strip()

    if choice == "2":
        print("Goodbye!")
        break

    elif choice == "1":
        user_input = input("Enter a word: ").strip()

        if len(user_input.split()) > 1:
            print("Please enter only one word.")
            continue

        if not user_input.isalpha():
            print("Only alphabetic characters are allowed.")
            continue

        word = user_input

        print(f'\nYOUR WORD: "{word.upper()}"')

        if checker.is_valid_word(word):
            print("this is a valid English word.")
        else:
            print("this is not a valid English word.")

        anagrams = checker.get_anagrams(word)

        if anagrams:
            print(f"Anagrams for your word: {', '.join(anagrams)}.")
        else:
            print("No anagrams found.")

    else:
        print("Invalid option, please choose 1 or 2.")
