import string
import random
from datetime import datetime
from faker import Faker


# Exercise 1 - Currency

class Currency:
    def __init__(self, currency, amount):
        self.currency = currency
        self.amount = amount

    def __str__(self):
        return f'{self.amount} {self.currency}s'

    def __repr__(self):
        return f'{self.amount} {self.currency}s'

    def __int__(self):
        return int(self.amount)

    def __add__(self, other):
        if isinstance(other, int):
            return self.amount + other
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f'Cannot add between Currency type <{self.currency}> and <{other.currency}>')
            return self.amount + other.amount

    def __iadd__(self, other):
        if isinstance(other, int):
            self.amount += other
            return self
        if isinstance(other, Currency):
            if self.currency != other.currency:
                raise TypeError(f'Cannot add between Currency type <{self.currency}> and <{other.currency}>')
            self.amount += other.amount
            return self


c1 = Currency('dollar', 5)
c2 = Currency('dollar', 10)
c3 = Currency('shekel', 1)
c4 = Currency('shekel', 10)

print(c1)
print(int(c1))
print(repr(c1))
print(c1 + 5)
print(c1 + c2)
print(c1)

c1 += 5
print(c1)

c1 += c2
print(c1)

# print(c1 + c3)


# Exercise 2 - Import

def add_numbers(a, b):
    print(a + b)

add_numbers(3, 7)


# Exercise 3 - String module

letters = string.ascii_letters
result = ""
for i in range(5):
    result += random.choice(letters)

print(result)


# Exercise 4 - Current Date

def get_current_date():
    today = datetime.now()
    print(today.strftime("%Y-%m-%d"))

get_current_date()


# Exercise 5 - Time until new year

def time_until_new_year():
    now = datetime.now()
    new_year = datetime(now.year + 1, 1, 1)
    diff = new_year - now
    print(diff)

time_until_new_year()


# Exercise 6 - Birthday minutes

def birthday_minutes(birthdate):
    born = datetime.strptime(birthdate, "%Y-%m-%d")
    now = datetime.now()
    diff = now - born
    minutes = int(diff.total_seconds() / 60)
    print(f"You have lived {minutes} minutes")

birthday_minutes("2000-01-01")


# Exercise 7 - Faker

fake = Faker()
users = []

def add_users(n):
    for i in range(n):
        user = {
            "name": fake.name(),
            "address": fake.address(),
            "language_code": fake.language_code()
        }
        users.append(user)

add_users(5)
print(users)
