# day1excersise1.py
for greeting in range(4):
   print("hello, world")
print((99^3)*8)
print(5<3)
# False
print(3==3)
# True
print(3=="3")
# False
print("Hello"=="hello")
# False
computer_brand="ASUS Vivobook"
print(f"I have a {computer_brand} computer")
name="Natanel Karp"
age=19
shoe_size=10
info=f"Hi, my name is {name}, i'm {age} years old and my shoe size is {shoe_size}"
print(info)
a=8
b=5
if a>b:
   print("Hello World")
num=int(input("Enter Number Here: "))
if num % 2 == 0:
   print("even")
if num % 2 != 0:
   print("odd")
name = input("What's your name? ")
if name=="Natanel Karp":
   print("Wow, we have the same name!")
else:
   print("Nice to meet you, " + name + "!")
height=float(input("Enter your height in cm: "))
if height > 145:
   print("You are tall enough to ride the roller coaster!")
else:   print("Sorry, you need to be taller to ride the roller coaster.")


# day1excersise2.py
for greeting in range(4):
   print("Hello, world")
for interest in range(4):
   print("I love python")
number_month= int(input("Enter the number month (1-12): "))
if number_month in {3,4,5}:
    print("Spring")
elif number_month in {6,7,8}:
    print("Summer")
elif number_month in {9,10,11}:
    print("Autumn")
elif number_month in {12,1,2}:
    print("Winter")


# day1excersise3.py
print(3<=3<9)
# true
print(3==3==3)
# true
print(bool(0))
# false
print(bool(5 == "5"))
# false
print(bool(4 == 4) == bool("4" == "4"))
# true
print(bool(bool(None)))
# false
x=(1==True)
y=(1==False)
a=True + 4
b=False + 10
print("x is", f"{x}")
print("y is", f"{y}")
print("a:", a)
print("b:", b)
my_text="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.   Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
length=len(my_text)
print("The length of the text is:", length)
longest=""
while True:
    sentence=input("Enter the longest sentence you can without using the letter 'a': ")
    if 'a' in sentence.lower():
        print("You used the letter 'a'. Try again.")
        continue
    if len(sentence) > len(longest):
        longest = sentence
        print("Congratulations! You've set a new longest sentence without 'a'.")
    else:
        print("Your sentence is not longer than the previous one.")
