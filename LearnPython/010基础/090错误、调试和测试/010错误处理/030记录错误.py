import logging


def one():
    return 10 / 0


def two():
    return one() * 2


try:
    two()
except Exception as e:
    # 使用logging模块可以将错误打印出来，但不会终止程序运行
    logging.exception(e)

print('End')

# 另外，logging模块也可以配置使用多种方式记录错误，如将错误记录到日志文件中