class Student(object):
    # __getattr__，在访问不存在的属性时，会调用该方法
    def __getattr__(self, item):
        if item == 'get_score':
            return lambda: 90
        if item == 'a':
            return 'aaa'
        if item == 'no':
            raise AttributeError('no this attr')


s = Student()
# 访问不存在的属性
print(s.a)
# 调用不存在的方法
print(s.get_score())

# 定义了__getattr__后，再访问不存在属性时，都会调用__getattr__，即使返回None
print(s.b)
# 要不允许访问某些属性，或只允许特定属性，要手动抛出异常
print(s.no)
