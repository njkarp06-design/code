# Exercise 1
keys = ['Ten', 'Twenty', 'Thirty']
values = [10, 20, 30]
result = dict(zip(keys, values))
print(result)

# Exercise 2
family = {"rick": 43, "beth": 13, "morty": 5, "summer": 8}
total = 0
for name, age in family.items():
    if age < 3:
        price = 0
    elif age <= 12:
        price = 10
    else:
        price = 15
    print(name + " costs $" + str(price))
    total += price
print("Total cost: $" + str(total))

# bonus
family2 = {}
while True:
    member = input("Enter family member name (or 'done' to stop): ")
    if member == "done":
        break
    age = int(input("Enter their age: "))
    family2[member] = age

total2 = 0
for name, age in family2.items():
    if age < 3:
        price = 0
    elif age <= 12:
        price = 10
    else:
        price = 15
    total2 += price
print("Total cost: $" + str(total2))

# Exercise 3
brand = {
    "name": "Zara",
    "creation_date": 1975,
    "creator_name": "Amancio Ortega Gaona",
    "type_of_clothes": ["men", "women", "children", "home"],
    "international_competitors": ["Gap", "H&M", "Benetton"],
    "number_stores": 7000,
    "major_color": {
        "France": "blue",
        "Spain": "red",
        "US": ["pink", "green"]
    }
}

brand["number_stores"] = 2
print("Zara makes clothes for: " + ", ".join(brand["type_of_clothes"]))
brand["country_creation"] = "Spain"
if "international_competitors" in brand:
    brand["international_competitors"].append("Desigual")
del brand["creation_date"]
print(brand["international_competitors"][-1])
print(brand["major_color"]["US"])
print(len(brand))
print(brand.keys())

# bonus
more_on_zara = {"creation_date": 1975, "number_stores": 2}
brand.update(more_on_zara)
print(brand)

# Exercise 4
users = ["Mickey", "Minnie", "Donald", "Ariel", "Pluto"]

char_to_index = {}
for i, name in enumerate(users):
    char_to_index[name] = i
print(char_to_index)

index_to_char = {}
for i, name in enumerate(users):
    index_to_char[i] = name
print(index_to_char)

sorted_users = sorted(users)
sorted_dict = {}
for i, name in enumerate(sorted_users):
    sorted_dict[name] = i
print(sorted_dict)
