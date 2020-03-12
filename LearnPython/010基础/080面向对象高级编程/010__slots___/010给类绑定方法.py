class Student(object):
    pass


def set_score(self, score):
    self.score = score

# 可以给类绑定方法。那么该类的所有实例都可以使用这个方法
Student.set_score = set_score

s = Student()
s.set_score(80)
print(s.score)
