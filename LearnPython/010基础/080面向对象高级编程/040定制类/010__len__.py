# 类中有一些形如 __xxx__ 的特殊属性方法，例如__slots__可以限制类中的属性名

class Student(object):
    # __len__可以使实例作用于len方法
    def __len__(self):
        return 10


s = Student()
print(len(s))
