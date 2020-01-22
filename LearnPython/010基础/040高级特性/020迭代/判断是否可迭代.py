from collections import Iterable

# 可通过是否继承 Iterable 类来判断是否为可迭代对象
print(isinstance([1, 2, 3], Iterable))
print(isinstance({'a': 1, 'b': 2}, Iterable))
print(isinstance('xyz', Iterable))
print(isinstance(range(1, 3), Iterable))
