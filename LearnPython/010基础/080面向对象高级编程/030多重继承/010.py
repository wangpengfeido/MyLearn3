class Animal(object):
    pass


class Mammal(Animal):
    pass


class Runnable(object):
    def run(self):
        print('running...')


# python 支持多重继承
class Dog(Mammal, Runnable):
    pass


d = Dog()
d.run()
