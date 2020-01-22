# 当有可变参数时，就不需要 * 分隔
def person(name, *other, job, city='shanghai'):
    print(name, job, city, other)


person('wang', 'happy', job='engineer', city="weifang", )
