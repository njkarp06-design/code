import random

user_input = input("Enter a 10 character string: ")

if len(user_input) < 10:
    print("String not long enough.")
elif len(user_input) > 10:
    print("String too long.")
else:
    print("Perfect string")
    print("First character:", user_input[0])
    print("Last character:", user_input[-1])

    built = ""
    for char in user_input:
        built += char
        print(built)

    chars = list(user_input)
    random.shuffle(chars)
    jumbled = "".join(chars)
    print("Jumbled string:", jumbled)
