class Student(object):
    # __init__ 构造函数。第一个参数是 self ，表示创建的实例本身
    def __init__(self, name, score):
        self.name = name
        self.score = score

# 调用时不需要传递 self
sam = Student('sam', 59)

print(sam.name, sam.score)
