def add_end(L=[]):
    L.append('end')
    return L


print(add_end())
print(add_end())
print(add_end())

# 带有默认参数的函数多次调用时，默认参数指向的是同一个对象
# 因此，参数默认值最好是不可变对象
