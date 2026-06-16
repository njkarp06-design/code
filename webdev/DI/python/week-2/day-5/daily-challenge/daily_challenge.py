import random

# Exercise 1

# 1. What is a class?
# a class is basically a template or blueprint for creating objects. it holds the attributes and methods that those objects will have.

# 2. What is an instance?
# an instance is an actual object made from a class. so if Dog is the class, my_dog = Dog() is the instance.

# 3. What is encapsulation?
# encapsulation is keeping the data and the methods that use it bundled together inside a class, and hiding the internal stuff from outside.

# 4. What is abstraction?
# hiding how something works internally and just showing what it does. like you dont need to know how a car engine works to drive it.

# 5. What is inheritance?
# when a child class gets the attributes and methods of a parent class so it doesnt have to rewrite everything from scratch.

# 6. What is multiple inheritance?
# when a class inherits from more than one parent class.

# 7. What is polymorphism?
# when different objects can use the same method name but behave differently depending on the class. like a .speak() method working differently on a Dog vs a Cat.

# 8. What is method resolution order (MRO)?
# MRO is the order python uses to search for a method when there is inheritance involved. you can check it with ClassName.__mro__


# Exercise 2

class Card:
    def __init__(self, suit, value):
        self.suit = suit
        self.value = value

    def __repr__(self):
        return self.value + " of " + self.suit


class Deck:
    def __init__(self):
        suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
        values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
        self.cards = [Card(suit, value) for suit in suits for value in values]

    def shuffle(self):
        suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
        values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
        self.cards = [Card(suit, value) for suit in suits for value in values]
        random.shuffle(self.cards)

    def deal(self):
        if len(self.cards) == 0:
            print("No cards left in the deck.")
            return None
        return self.cards.pop()


deck = Deck()
deck.shuffle()
print(deck.deal())
print(deck.deal())
print(deck.deal())
print("Cards remaining:", len(deck.cards))
