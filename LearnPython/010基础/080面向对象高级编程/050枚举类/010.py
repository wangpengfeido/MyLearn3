from enum import Enum

# 创建枚举类
N = Enum('Num', ('One', 'Two', 'Three'))

# 访问枚举成员
print(N.One, N.One.value)

# 遍历枚举成员
for name, member in N.__members__.items():
    print(name, '=>', member, ',', member.value)
