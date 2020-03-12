# 多重继承可方便地使用混入模式
# 非单线继承的，可以为其他类添加功能的，就可以看做“混入”

class Animal(object):
    pass


class Mammal(Animal):
    pass


class RunnableMixin(object):
    def run(self):
        print('running...')


class Dog(Mammal, RunnableMixin):
    pass


d = Dog()
d.run()
