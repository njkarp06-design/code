import random

# Exercise 1

# 1. What is a class?
# A class is a blueprint for creating objects. It defines the attributes and methods that the objects made from it will have.

# 2. What is an instance?
# An instance is an object created from a class. Each instance has its own copy of the class attributes.

# 3. What is encapsulation?
# Encapsulation is bundling data and the methods that work on that data together inside a class, and keeping the internal details hidden from outside.

# 4. What is abstraction?
# Abstraction is hiding the complex implementation details and only exposing what's necessary for the user to interact with.

# 5. What is inheritance?
# Inheritance is when a class (child) takes on the attributes and methods of another class (parent).

# 6. What is multiple inheritance?
# Multiple inheritance is when a class inherits from more than one parent class at the same time.

# 7. What is polymorphism?
# Polymorphism is when different classes can be used with the same interface, each responding to the same method call in their own way.

# 8. What is method resolution order (MRO)?
# MRO is the order Python uses to look up methods and attributes in a class hierarchy. It follows the C3 linearization algorithm, and you can check it with ClassName.__mro__


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
