from collections import Iterator

# 可以被next执行并返回下个值的对象称为迭代器（Iterator）
# 生成器都是迭代器

# 可以使用isinstance()判断是否为Iterator对象
print(isinstance((x for x in range(10)), Iterator))
# 可迭代对象不一定是迭代器
# 迭代器表示的是一个数据流，只有在需要下一个数据时才会计算
print(isinstance([1, 2, 3], Iterator))
