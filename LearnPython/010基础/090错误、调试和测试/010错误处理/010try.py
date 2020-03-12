try:
    print('try...')
    # 使用 try 包裹可能会抛出异常的代码
    # 抛出异常
    r = 10 / 0
    print('result:', r)
except ZeroDivisionError as e:
    # except 中捕获并处理错误
    print('except:', e)
finally:
    # 最后执行finally（不管有没有异常都会执行）
    print('finally...')
print('END')
