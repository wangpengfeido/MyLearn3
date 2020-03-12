def one():
    return 10 / 0


def two():
    try:
        one()
    except ZeroDivisionError as e:
        print('ZeroDivisionError:', e)
        # 在except中，也可以抛出异常
        # 如果 raise 后面不带任何参数，那么就会将原异常再次抛出
        raise


try:
    two()
except Exception as e:
    print('Exception:', e)
