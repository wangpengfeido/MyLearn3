import functools

# 偏函数是固定某些函数参数，产生一个新的函数，从而使函数调用更简单
# functools.partial 按照*args,**kw的格式传入固定的参数

# 固定base参数
int2 = functools.partial(int, base=2)
print(int2('100100'))

# 固定数值参数
int10 = functools.partial(int, '11')
print(int10(base=5))
