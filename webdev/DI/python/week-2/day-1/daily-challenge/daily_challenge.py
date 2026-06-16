# Daily Challenge - Old MacDonald's Farm

class Farm:
    def __init__(self, farm_name):
        self.name = farm_name
        self.animals = {}

    def add_animal(self, **kwargs):
        for animal, count in kwargs.items():
            if animal in self.animals:
                self.animals[animal] += count
            else:
                self.animals[animal] = count

    def get_info(self):
        info = f"{self.name}'s farm\n\n"
        for animal, count in self.animals.items():
            info += f"{animal.ljust(15)}: {count}\n"
        info += "\n    E-I-E-I-O!"
        return info

    def get_animal_types(self):
        return sorted(self.animals.keys())

    def get_short_info(self):
        types = self.get_animal_types()
        animal_names = []
        for a in types:
            if self.animals[a] > 1:
                animal_names.append(a + "s")
            else:
                animal_names.append(a)
        if len(animal_names) == 1:
            return f"{self.name}'s farm has {animal_names[0]}."
        return f"{self.name}'s farm has {', '.join(animal_names[:-1])} and {animal_names[-1]}."


macdonald = Farm("McDonald")
macdonald.add_animal(cow=5, sheep=2, goat=12)
print(macdonald.get_info())
print(macdonald.get_animal_types())
print(macdonald.get_short_info())
