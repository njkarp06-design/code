# Exercise 1
my_fav_numbers = {3, 7, 11, 42}
my_fav_numbers.add(5)
my_fav_numbers.add(13)
my_fav_numbers.discard(13)
friend_fav_numbers = {2, 8, 15, 22}
our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)

# Exercise 2
my_tuple = (1, 2, 3, 4, 5)
# cant add to a tuple since they are immutable
# my_tuple.append(6)
print(my_tuple)

# Exercise 3
basket = ["Banana", "Apples", "Oranges", "Blueberries"]
basket.remove("Banana")
basket.remove("Blueberries")
basket.append("Kiwi")
basket.insert(0, "Apples")
print(basket.count("Apples"))
basket.clear()
print(basket)

# Exercise 4
my_list = []
for i in range(3, 11):
    my_list.append(i / 2)
print(my_list)

# Exercise 5
for i in range(1, 21):
    print(i)

for index, num in enumerate(range(1, 21)):
    if index % 2 == 0:
        print(num)

# Exercise 6
while True:
    name = input("Please enter your name: ")
    if not name.isdigit() and len(name) >= 3:
        print("Thank you")
        break
    print("Invalid name. Please try again.")

# Exercise 7
fruits_input = input("Enter your favorite fruits separated by spaces: ")
favorite_fruits = fruits_input.split()
chosen_fruit = input("Enter the name of any fruit: ")
if chosen_fruit in favorite_fruits:
    print("You chose one of your favorite fruits! Enjoy!")
else:
    print("You chose a new fruit. I hope you enjoy it!")

# Exercise 8
toppings = []
while True:
    topping = input("Enter a pizza topping (or 'quit' to stop): ")
    if topping == "quit":
        break
    toppings.append(topping)
    print(f"Adding {topping} to your pizza.")
print("Your toppings:", toppings)
total_cost = 10 + len(toppings) * 2.50
print(f"Total cost: ${total_cost}")

# Exercise 9
ages = []
total = 0
while True:
    age_input = input("Enter a family member's age (or 'done' to finish): ")
    if age_input == "done":
        break
    age = int(age_input)
    ages.append(age)

for age in ages:
    if age < 3:
        total += 0
    elif age <= 12:
        total += 10
    else:
        total += 15

print(f"Total ticket cost: ${total}")

attendees = []
while True:
    age_input = input("Enter a teenager's age (or 'done' to finish): ")
    if age_input == "done":
        break
    attendees.append(int(age_input))

allowed = []
for age in attendees:
    if 16 <= age <= 21:
        allowed.append(age)
print("Allowed attendees ages:", allowed)
