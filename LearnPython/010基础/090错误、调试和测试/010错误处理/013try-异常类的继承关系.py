try:
    print('try...')
    r = 10 / 0
    print('result:', r)
# 异常也是类，有继承关系
# 这里BaseException是ZeroDivisionError的父类，异常被BaseException捕获，ZeroDivisionError永远不会执行
except BaseException as e:
    print('BaseException:', e)
except ZeroDivisionError as e:
    print('ZeroDivisionError:', e)
finally:
    print('finally...')
print('END')
