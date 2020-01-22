# 所有可迭代对象都可用于 for in 循环
for x in [1, 2, 3]:
    print(x)
print('')

for x in (1, 2, 3):
    print(x)
print('')

# dict 也是可迭代对象
for x in {'a': 1, 'b': 2, 'c': 3}:
    print(x)
print('')

# 字符串也是可迭代对象
for x in 'xyz':
    print(x)
print('')

# 可以用 dict.values 方法遍历dict中的值
for x in {'a': 1, 'b': 2, 'c': 3}.values():
    print(x)
print('')

