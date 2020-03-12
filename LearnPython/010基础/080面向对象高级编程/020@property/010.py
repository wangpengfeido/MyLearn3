class Student(object):
    # @property 装饰器可以将方法变成属性
    @property
    def score(self):
        return self._score

    # 同时，@property 还创建了一个名为 @score.setter 的装饰器，它将方法变成属性赋值
    @score.setter
    def score(self, value):
        if not isinstance(value, int):
            raise ValueError('score must be an integer!')
        if value < 0 or value > 100:
            raise ValueError('score must between 0 - 100!')
        self._score = value


s = Student()
s.score = 90
print(s.score)
