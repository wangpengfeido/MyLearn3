# 关键字参数接收任意个带参数名的参数。它们被组装成一个dict
def person(name, **kw):
    print('name:', name, 'other:', kw)


person('wang', age=22, jog="engineer")

# 也可以使用 ** 将一整个dict传入
# ----见./075，**参数语法相当于把命名参数解构在这里，如f(**{'a':1})相当于f(a=1)
person('li', **{'age': 24, 'job': 'teacher'})
