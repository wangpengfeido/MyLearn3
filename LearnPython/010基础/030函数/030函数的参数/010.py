# 传递参数
def power(x, n):
    res = 1
    while n > 0:
        res *= x
        n -= 1
    return res


print(power(2, 3))

# 可以使用参数名任意改变传参顺序
print(power(n=3, x=2))
