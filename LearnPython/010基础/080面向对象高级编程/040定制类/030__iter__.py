from collections import Iterable


class Fib(object):
    def __init__(self):
        self.a, self.b = 0, 1

    # 定义了__iter__的类对象将成为可迭代对象
    # 它返回一个可迭代对象，并不断地被调用其__next__方法
    def __iter__(self):
        return self

    def __next__(self):
        self.a, self.b = self.b, self.a + self.b
        if self.a > 100:
            raise StopIteration()
        return self.a


f = Fib()
print(isinstance(f, Iterable))
for n in f:
    print(n)
