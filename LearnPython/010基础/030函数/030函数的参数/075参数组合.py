# 任意函数都可以使用func(*args, **kw)的形式调用
# 函数调用的 * 和 ** 语法相当于将数组/元组和dict解构为参数
def f1(a, b=1, *c, **d):
    print(a, b, c, d)


f1(*(1, 2,), **{'d': 3})


def f2(a, b=1, *c, d):
    print(a, b, c, d)


f2(*(1, 2,), **{'d': 3})
