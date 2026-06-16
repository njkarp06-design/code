class Dog:
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight

    def bark(self):
        return f"{self.name} is barking"

    def run_speed(self):
        return self.weight / self.age * 10

    def fight(self, other_dog):
        if self.run_speed() * self.weight > other_dog.run_speed() * other_dog.weight:
            return f"{self.name} won the fight"
        else:
            return f"{other_dog.name} won the fight"


if __name__ == "__main__":
    dog1 = Dog("Max", 3, 25)
    dog2 = Dog("Buddy", 5, 30)
    dog3 = Dog("Rocky", 2, 20)

    print(dog1.bark())
    print(dog2.run_speed())
    print(dog1.fight(dog2))
