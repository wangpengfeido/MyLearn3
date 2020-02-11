class Student(object):
    # 使用__slots__限制类可以添加的属性
    __slots__ = ('name', 'score')


s = Student()
s.name = "tom"
print(s.name)

# 添加不在__slots__中的属性是不被允许的
# s.age = 14

# 注意：__slots__不对子类起作用。但是如果子类也定义了__slots__，那么它会继承父类的__slots__
