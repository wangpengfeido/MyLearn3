import types


def fn():
    pass


class MyClass:
    pass


o = MyClass()

# type() 可以获取对象类型，它返回对应的class
print(type(123))
print(type('str'))
print(type(None))
print(type(fn))
print(type(o))
print()

# 判断基本类型可已使用int\str等
print(type(123) == int)
print(type('str') == str)
print()

# 判断函数可使用types中的常量
print(type(fn) == types.FunctionType)  # 函数
print(type(abs) == types.BuiltinFunctionType)  # 内建函数
print(type(lambda x: x) == types.LambdaType)  # lambda函数
print(type((x for x in range(10))) == types.GeneratorType)  # 生成器
print()

# 判断对象可与对应的类比较
print(type(o) == MyClass)
