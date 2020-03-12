# metaclass 允许你创建或修改类

# metaclass是类的模版，必须从type类派生
class ListMetaclass(type):
    # __new__接收四个参数：1.当前准备创建的类；2.类名；3.父类集合；4.静态属性和方法集合
    def __new__(cls, name, bases, attrs):
        attrs['add'] = lambda self, value: self.append(value)
        return type.__new__(cls, name, bases, attrs)


# 使用关键字参数metaclass，它指示该类创建时使用指定的metaclass的__new__方法创建
class MyList(list, metaclass=ListMetaclass):
    pass


l = MyList()
# 创建的实例有了 add() 方法
l.add(1)
print(l)
