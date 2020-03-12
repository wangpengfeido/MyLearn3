# sorted 将list进行排序
print(sorted([3, 1, 2, 4, 5]))

# 可以传递一个key函数参数，将按照key处理后进行排序
print(sorted(['a', 'D', 'e', 'C', 'b'], key=str.lower))

# reverse参数可进行反向
print(sorted([3, 1, 2, 4, 5], reverse=True))
