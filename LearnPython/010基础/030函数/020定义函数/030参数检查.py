def my_abs(x):
    if x >= 0:
        return x
    else:
        return -x

# 参数数量不对，将会报错
print(my_abs(-1, 1))
