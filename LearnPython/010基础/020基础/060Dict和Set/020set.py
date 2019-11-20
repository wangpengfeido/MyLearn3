# set是无重复key的集合。1不会重复存入
s = set([1, 1, 2, 3])
print(s, '\n')

# 使用add添加元素
s.add(4)
s.add(3)
print('add:', s, '\n')

# 使用remove移除元素
s.remove(2)
print('remove:', s, '\n')

print('交集:', set([1, 2, 3]) & set([3, 4, 5]))
print('并集:', set([1, 2, 3]) | set([3, 4, 5]))
