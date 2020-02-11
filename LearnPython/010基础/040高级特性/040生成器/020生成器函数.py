# 定义一个生成器函数，其中包含yield关键字。执行生成器函数返回一个生成器。
# 调用next时执行，执行到yield时会暂停并返回值
def fib(max):
    n, a, b = 0, 0, 1
    while n < max:
        yield b
        a, b = b, a + b
        n = n + 1
    return 'done'


f1 = fib(5)
print(next(f1))
print(next(f1))
print(next(f1))
print(next(f1))
print(next(f1))
# 超出抛出异常
# print(next(f1))
print('')

# 使用for遍历
f2 = fib(4)
for n in f2:
    print(n)
