class Student(object):
    # 直接定义在类中的属性是类属性
    school = 'No.1 School'

    def __init__(self, name, score):
        self.name = name
        self.score = score


sam = Student('sam', 59)

# 类属性可以通过类访问，也可通过类实例访问
print(Student.school)
print(sam.school)

# 注：实例属性比类属性优先级高，如果重名优先显示实例属性
