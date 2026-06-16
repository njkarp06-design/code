import string
import random

letters = string.ascii_letters
result = ""
for i in range(5):
    result += random.choice(letters)

print(result)
