from enum import Enum, unique


# @unique 修饰器保证枚举值不重复
@unique
class Num(Enum):
    # 自定义枚举的值
    One = 'a'
    Two = 'b'
    Three = 'c'


# 访问枚举成员
print(Num.One, Num.One.value)
print(Num["One"])
# 通过枚举值访问枚举成员
print(Num('a'))
# 遍历
for name, member in Num.__members__.items():
    print(name, '=>', member)
