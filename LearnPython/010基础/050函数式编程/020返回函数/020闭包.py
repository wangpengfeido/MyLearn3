# 闭包是函数及其上下文环境的集合

def count():
    fs = []
    for i in range(1, 4):
        def f():
            return i * i

        fs.append(f)
    return fs


f1, f2, f3 = count()
# f1(),f2(),f3()的结果都是9。因为三个闭包引用了同一个i，而i的最后值为3
print(f1(), f2(), f3())


# 如果循环内必要要引用循环变量，应该再创建一个函数##################
def count2():
    def f(j):
        def g():
            return j * j;
        return g

    fs = []
    for i in range(1, 4):
        fs.append(f(i))
    return fs


f4, f5, f6 = count2()
print(f4(), f5(), f6())
