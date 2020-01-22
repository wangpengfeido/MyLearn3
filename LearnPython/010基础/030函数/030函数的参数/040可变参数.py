# 使用*接收任意个参数。这些参数被组装为一个tuple
def calc(a, *other_numbers):
    sum = 0
    for n in other_numbers:
        sum += n
    return a + sum


print(calc(1, 2, 3))

# 也可以使用*元组/数组传递任意个参数
# ----见075，*元组/数组参数语法相当于直接把参数解构在这里，如f(*(2,3))相当于f(2,3)
print(calc(1, *(2, 3)))
