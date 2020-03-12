try:
    print('try...')
    r = 10 / 0
    print('result:', r)
# except 只能捕获对应类型的异常
except ValueError as e:
    print('ValueError:', e)
except ZeroDivisionError as e:
    print('ZeroDivisionError:', e)
finally:
    print('finally...')
print('END')
