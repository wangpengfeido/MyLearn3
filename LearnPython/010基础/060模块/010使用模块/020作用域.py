# 一般我们把不想被其他模块引用的变量以 "_" 或 "__" 作为前缀
# 注意：这样只是习惯约定的不建议访问，并非不能访问


_helloText = 'hello'


def sayHello():
    print('hello')


# __xxx__ 是特殊变量，如__author__,__name__