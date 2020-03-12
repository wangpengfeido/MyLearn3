# 如果装饰器需要传入参数，那么就需要写一个返回装饰器的高阶函数
def log(text):
    def decorator(func):
        def wrapper(*args, **kw):
            print('%s %s():' % (text, func.__name__))
            return func(*args, **kw)

        return wrapper

    return decorator


# 使用时先调用返回一个装饰器
@log('execute')
def add(a, b):
    return a + b


# 相当于add=log('execute')(add)


print(add(1, 1))
