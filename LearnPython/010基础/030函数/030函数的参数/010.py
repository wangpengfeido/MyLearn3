# 传递参数
def power(x, n):
    res = 1
    while n > 0:
        res *= x
        n -= 1
    return res


print(power(2, 3))
