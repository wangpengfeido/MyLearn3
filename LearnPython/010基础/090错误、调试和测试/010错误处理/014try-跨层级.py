def one():
    return 10 / 0


def two():
    return one() * 2


# 异常可以跨函数层级捕获
try:
    two()
except ZeroDivisionError as e:
    print('ZeroDivisionError:', e)
