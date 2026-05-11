import random

# Exercise 1
def display_message():
    print("I am learning about functions in Python.")

display_message()

# Exercise 2
def favorite_book(title):
    print("One of my favorite books is " + title)

favorite_book("Alice in Wonderland")

# Exercise 3
def describe_city(city, country="Unknown"):
    print(city + " is in " + country + ".")

describe_city("Reykjavik", "Iceland")
describe_city("Paris")

# Exercise 4
def compare_numbers(number):
    random_number = random.randint(1, 100)
    if number == random_number:
        print("Success!")
    else:
        print("Fail! Your number: " + str(number) + ", Random number: " + str(random_number))

compare_numbers(50)

# Exercise 5
def make_shirt(size="large", text="I love Python"):
    print("The size of the shirt is " + size + " and the text is " + text + ".")

make_shirt()
make_shirt("medium")
make_shirt("small", "Custom message")
make_shirt(size="small", text="Hello!")

# Exercise 6
magician_names = ["Harry Houdini", "David Blaine", "Criss Angel"]

def show_magicians(names):
    for name in names:
        print(name)

def make_great(names):
    for i in range(len(names)):
        names[i] = names[i] + " the Great"

make_great(magician_names)
show_magicians(magician_names)

# Exercise 7
def get_random_temp():
    return random.randint(-10, 40)

def main():
    temp = get_random_temp()
    print("The temperature right now is " + str(temp) + " degrees Celsius.")
    if temp < 0:
        print("Brrr, that's freezing! Wear some extra layers today.")
    elif temp <= 16:
        print("Quite chilly! Don't forget your coat.")
    elif temp <= 23:
        print("Nice weather.")
    elif temp <= 32:
        print("A bit warm, stay hydrated.")
    else:
        print("It's really hot! Stay cool.")

main()

# bonus - floating point temps
def get_random_temp_float():
    return round(random.uniform(-10, 40), 1)

# bonus - season based on month
def get_season_temp():
    month = int(input("Enter a month (1-12): "))
    if month in [12, 1, 2]:
        season = "winter"
        temp = random.randint(-10, 5)
    elif month in [3, 4, 5]:
        season = "spring"
        temp = random.randint(5, 18)
    elif month in [6, 7, 8]:
        season = "summer"
        temp = random.randint(20, 40)
    else:
        season = "autumn"
        temp = random.randint(5, 15)
    print("Season: " + season)
    return temp
