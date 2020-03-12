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

# 使用instance()判断对象是否为某个类的实例
# sam 是Animal的实例，但不是Dog的实例
print(isinstance(sam, Animal))
print(isinstance(sam, Dog))
# tom 是Animal的实例，也是Dog的实例。因为Dog继承自Animal
print(isinstance(tom, Animal))
print(isinstance(tom, Dog))
print()

# isinstance() 也可以判断基本类型
print(isinstance(123, int))
print(isinstance('a', str))
print(isinstance(b'a', bytes))
print()

# instance()还可以判断变量是否是某些类中一种的实例
print(isinstance([1, 2, 3], (list, tuple)))
