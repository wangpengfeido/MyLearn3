def one():
    return 10 / 0


def two():
    return one() * 2

# 如果异常未被捕获，那么它将被解释器捕获打印出错误调用栈，并退出程序
two()
print('End')
