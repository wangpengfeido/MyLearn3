# 导入sys模块
import sys


def test():
    print(sys.argv)


# __name__是一个特殊变量，当这个模块是入口模块时，它的值为"__main__"
if __name__ == '__main__':
    test()
