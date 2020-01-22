# 一个函数调用自身，就是递归函数
def fact(n):
    if (n == 1):
        return 1
    return n * fact(n - 1)


print(fact(5))

# python 不支持尾递归优化
