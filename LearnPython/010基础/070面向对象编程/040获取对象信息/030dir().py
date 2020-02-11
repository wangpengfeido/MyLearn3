class Student(object):
    def __init__(self, name, score):
        self.__name = name
        self.__score = score
        self.__test__ = 'test'

    def print_score(self):
        print('%s:%s' % (self.__name, self.__score))

    def get_score(self):
        return self.__score

    def set_score(self, score):
        self.__score = score


sam = Student('sam', 59)

# dir() 可以获取对象的所有属性和方法
print(dir(sam))
print()

# hasattr() 检查对象是否拥有属性/方法
print(hasattr(sam, '__name'))  # False
print(hasattr(sam, '_Student__name'))  # True
print(hasattr(sam, 'get_score'))
print()

# getattr() 获取对象的属性/方法
get_score = getattr(sam, 'get_score')
# 调用 get_score 相当于调用 sam.get_score
print(get_score())
# 可以传入默认值，如果不存在属性则返回默认值，否则将报错
# print(getattr(sam, 'sdf'))
print(getattr(sam, 'sdf', 'aaa'))
print()

# setattr() 设置对象的属性。注：也可设置方法，但无法获取self，也无法在其中调用类的私有属性方法
setattr(sam, 'gender', 'male')
print(sam.gender)
