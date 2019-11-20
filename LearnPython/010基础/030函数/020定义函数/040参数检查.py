def my_abs(x):
    # 可以在函数内部做类型检查
    if not isinstance(x, (int, float)):
        raise TypeError('参数类型错误')
    if x >= 0:
        return x
    else:
        return -x


# 参数类型不能通过检查，将会报错
print(my_abs('a'))
