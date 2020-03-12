from functools import reduce

# reduce 是累积计算。
# 计算函数接收两个参数，第一个是上一次计算的结果，第二个是当前计算的值。（注：第一次计算时两个参数分别是列表中的第一二个值）

l = [1, 2, 3, 4, 5]


def add(a, b):
    return a + b


r = reduce(add, l)
print(r)
