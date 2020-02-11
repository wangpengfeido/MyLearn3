try:
    print('try...')
    r = 10 / 1
    print('result:', r)
except ZeroDivisionError as e:
    print('ZeroDivisionError:', e)
# 当没有异常时，会执行else
else:
    print('no error')
finally:
    print('finally...')
print('END')
