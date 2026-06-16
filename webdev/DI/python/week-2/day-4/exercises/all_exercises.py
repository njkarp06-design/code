import random
import json
import sys


# Exercise 1 - Random Sentence Generator

def get_words_from_file(file_path):
    with open(file_path, "r") as f:
        content = f.read()
    words = content.split()
    return words

def get_random_sentence(length):
    words = get_words_from_file("words.txt")
    sentence = " ".join(random.choice(words) for _ in range(length))
    return sentence.lower()

def main():
    print("This program generates a random sentence from a word list.")
    try:
        length = int(input("Enter the desired sentence length (2-20): "))
    except ValueError:
        print("Invalid input. Please enter an integer.")
        sys.exit()
    if length < 2 or length > 20:
        print("Invalid input. Please enter a number between 2 and 20.")
        sys.exit()
    sentence = get_random_sentence(length)
    print(sentence)

main()


# Exercise 2 - Working with JSON

sample_json = """{
   "company":{
      "employee":{
         "name":"emma",
         "payable":{
            "salary":7000,
            "bonus":800
         }
      }
   }
}"""

data = json.loads(sample_json)

salary = data["company"]["employee"]["payable"]["salary"]
print(salary)

data["company"]["employee"]["birth_date"] = "1995-03-14"

with open("employee.json", "w") as f:
    json.dump(data, f, indent=4)
