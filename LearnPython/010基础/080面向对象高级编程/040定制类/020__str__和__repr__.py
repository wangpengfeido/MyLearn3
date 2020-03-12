class Student(object):
    # __str__ 定义 str() 函数转换输出（通常给用户看）
    def __str__(self):
        return 'my str'

    # __repr__ 定义 repr() 函数转换输出（通常给开发者看）
    def __repr__(self):
        return 'my repr'


s = Student()
print(str(s))
print(repr(s))