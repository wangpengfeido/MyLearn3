# map传入Iterable，转换为另一个Iterator

l = [1, 2, 3, 4, 5]


def f(x):
    return x * x


r = map(f, l)
print(list(r))
