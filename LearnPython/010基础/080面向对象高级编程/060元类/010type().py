# type() 除了返回对象的类型，也可以创建新的类型

def fn(self, name='world'):
    print('Hello, %s' % name)


# type() 创建类的时候要传入3个参数：1.class名称；2.父类集合；3.类的方法与静态属性
Hello = type('Hello', (object,), dict(a='aaa', hello=fn))

h = Hello()
h.hello()
print(h.a)


# type() 是动态创建类，这是动态语言的特点
# class 语法实质上也是解释器通过 type() 来创建类