# 实际上 __getitem__ 可以传入任意类型，使对象可进行 "[]" z操作
# 还有对应的 __setitem__ 和 __delitem__ 方法，分别对应取值和 del

class Student(object):
    def __init__(self):
        self.d = {}

    def __getitem__(self, key):
        return self.d.get(key)

    def __setitem__(self, key, value):
        self.d[key] = value

    def __delitem__(self, key):
        self.d.pop(key)


s = Student()
s['a'] = 'aaa'
print(s['a'])
del s['a']
print(s['a'])
