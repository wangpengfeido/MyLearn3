# 使用*接收任意个参数
def calc(a, *other_numbers):
    sum = 0
    for n in other_numbers:
        sum += n
    return a + sum


print(calc(1, 2, 3))

# 也可以使用*元组/数组传递任意个参数
print(calc(1, *(2, 3)))
