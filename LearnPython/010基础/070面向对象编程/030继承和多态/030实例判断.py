class Animal(object):
    def run(self):
        print('Animal is running...')


class Dog(Animal):
    def run(self):
        print('Dog is running...')

    def eat(self):
        print('Dog is eating')


sam = Animal()
tom = Dog()

# sam 是Animal的实例，但不是Dog的实例
print(isinstance(sam, Animal))
print(isinstance(sam, Dog))
# tom 是Animal的实例，也是Dog的实例。因为Dog继承自Animal
print(isinstance(tom, Animal))
print(isinstance(tom, Dog))

# 我们将其称为多态
