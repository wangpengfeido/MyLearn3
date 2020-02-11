def num():
    n = 1
    while True:
        yield n
        n = n + 1


n = num()
print(next(n))
print(next(n))
print(next(n))
print(next(n))
print(next(n))
print(next(n))
print(next(n))
print('')

n2 = filter(lambda x: x % 3 == 0, n)
print(next(n2))
print(next(n2))
print(next(n2))


# 经试验可知，高阶过后的迭代器next从之前迭代器迭代到的地方开始