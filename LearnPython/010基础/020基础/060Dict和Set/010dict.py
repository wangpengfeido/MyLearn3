# dict 结构
# dict 的key必须是不可变对象，如整数、字符串
d = {'a': 1, 'b': 2, 'c': 3}
print(d, '\n')

print(d['a'], '\n')
# 不能使用'[]'读取不存在的值
# print(d['z'])

# 写入值
d['b'] = 100
print('写入后：', d['b'], '\n')

# 判断属性存在
print('判断属性存在：', 'z' in d, '\n')

# get方法可以取不存在的属性，返回None
print('get方法', d.get('a'), d.get('z'), '\n')

# 使用pop方法删除key
d.pop('b')
print('删除key', d, '\n')
