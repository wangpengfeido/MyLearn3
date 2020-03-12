class Student(object):
    def __init__(self, name, score):
        # 变量以"__"开头，那么它就是一个私有变量
        self.__name = name
        self.__score = score
        self.__test__ = 'test'

    def print_score(self):
        print('%s:%s' % (self.__name, self.__score))

    # 定义访问函数
    def get_score(self):
        return self.__score

    def set_score(self, score):
        self.__score = score


sam = Student('sam', 59)

# 不能直接访问
# print(sam.__name)

# 使用访问函数访问
sam.set_score(95)
print(sam.get_score())

# 形如 "__xxx__" 的变量是特殊变量，不是私有的
print(sam.__test__)

# 以"_"开头的变量虽然可以被外部访问，但习惯约定不从外部访问
