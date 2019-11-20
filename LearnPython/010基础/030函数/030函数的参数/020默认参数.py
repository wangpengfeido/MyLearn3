# 使用默认参数
# 默认参数必须在最后
def power(x, n=2, add=0):
    res = 1
    while n > 0:
        res *= x
        n -= 1
    return res + add


print(power(2))
# 当有多个默认参数时，可以使用参数名指定传递的参数
print(power(2, add=10))
