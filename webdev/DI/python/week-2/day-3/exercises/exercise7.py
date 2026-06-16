from faker import Faker

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
