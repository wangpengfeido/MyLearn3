import functools


def log(func):
    # 使用functools.wraps装饰器函数可更改函数__name__属性
    @functools.wraps(func)
    def wrapper(*args, **kw):
        print('call %s():' % func.__name__)
        return func(*args, **kw)

    return wrapper


@log
def add(a, b):
    return a + b


print(add.__name__)
print(add(1, 1))
