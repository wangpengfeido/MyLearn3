class Animal(object):
    def run(self):
        print('Animal is running...')


class Dog(Animal):
    # 重写父类的方法
    def run(self):
        print('Dog is running...')

    def eat(self):
        print('Dog is eating')


sam = Dog()
sam.run()
