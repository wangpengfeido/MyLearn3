# 定义自己的错误类
class MyError(Exception):
    pass


def foo():
    # 使用 raise 关键字抛出错误实例
    raise MyError('this is my error')


try:
    foo()
except Exception as e:
    print('error:', e)
