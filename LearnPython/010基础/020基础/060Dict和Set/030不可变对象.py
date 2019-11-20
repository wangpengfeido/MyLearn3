# 对于不可变对象，调用自身的任何方法都不会改变本身的值
a = 'abc'
a.replace('a', 'A')
print(a)
