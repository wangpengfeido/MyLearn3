from collections import Iterable

# 将列表生成式的[]换成()遍可构造生成器
g1 = (x * x for x in range(3))

# 生成器可以使用next()执行
print(next(g1))
print(next(g1))
print(next(g1))
# 超出范围将报错
# print(next(g1))
# generator保存的是算法，只有通过next调用时才继续计算下个值
print('')

# 也可以使用for遍历生成器，因为generator是可迭代对象
g2 = (x * x for x in range(10))
for n in g2:
    print(n)
print(isinstance(g2, Iterable)) # True

# 生成器只能遍历一次