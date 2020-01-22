import os

# 10以内偶数的平方
l1 = [x * x for x in range(1, 11) if x % 2 == 0]
print(l1)

# 两层循环，生成全排列
l2 = [m + n for m in 'ABC' for n in 'XYZ']
print(l2)

# 目录下所有文件和目录名
l3 = [d for d in os.listdir('.')]
print(l3)

# 将列表中元素全部转换为小写
e1 = ['HELLO', "WORLD"]
l4 = [x.lower() for x in e1]
print(l4)

# 在for中使用多个变量
e2 = {'a': 1, 'b': 2, 'c': 3}
l5 = [x + '=' + str(y) for x, y in e2.items()]
print(l5)
