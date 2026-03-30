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

