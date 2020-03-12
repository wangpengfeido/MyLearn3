class Animal(object):
    def run(self):
        print('Animal is running...')


# 继承 Animal
class Dog(Animal):
    # 新增方法
    def eat(self):
        print('Dog is eating')


sam = Dog()
# 子类继承了父类的方法
sam.run()
sam.eat()
