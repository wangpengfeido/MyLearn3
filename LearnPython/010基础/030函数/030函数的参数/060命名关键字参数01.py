# 命名关键字参数以 * 分隔
# 可以有缺省参数
def person(name, *, job, city='shanghai'):
    print(name, job, city)


# 调用时必须使用参数名
person('wang', job='engineer', city="weifang", )

# 缺省调用
person('li', job="teacher")

# 参数可任意顺序
person(city='beijing', job='worker', name='sam')
