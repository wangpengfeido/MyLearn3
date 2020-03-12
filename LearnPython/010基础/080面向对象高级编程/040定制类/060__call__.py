class Student(object):
    # __call__ 允许对实例本身进行调用
    def __call__(self):
        print('this is a student')


s = Student()
s()

# 可以使用 callable 判断对象是否可被调用
print(callable(s))
