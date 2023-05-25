class Animal:
    def __init__(self, name):
        self.name = name

    def make_sound(self):
        pass


class Dog(Animal):
    def make_sound(self):
        return "Woof!"


class Cat(Animal):
    def make_sound(self):
        return "Meow!"


class Cow(Animal):
    def make_sound(self):
        return "Moo!"


# Polymorphic function
def animal_sounds(animal):
    return animal.make_sound()


# Create instances of different animals
dog = Dog("Bobby")
cat = Cat("Whiskers")
cow = Cow("Bessie")

# Call the polymorphic function with different animals
print(animal_sounds(dog))  # Output: Woof!
print(animal_sounds(cat))  # Output: Meow!
print(animal_sounds(cow))  # Output: Moo!
