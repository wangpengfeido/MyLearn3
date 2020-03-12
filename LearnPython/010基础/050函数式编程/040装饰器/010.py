# 装饰器可以增强函数的功能，它本质上是一个接收一个函数参数的高阶函数

# 例如在函数执行前打印日志
def log(func):
    def wrapper(*args, **kw):
        print('call %s():' % func.__name__)
        return func(*args, **kw)

    return wrapper


# 通过 @ 使用装饰器
@log
def add(a, b):
    return a + b


# 相当于 add=log(add)

# 这里的函数名已不再是add，而是wrapper
print(add.__name__)
print(add(1, 1))
