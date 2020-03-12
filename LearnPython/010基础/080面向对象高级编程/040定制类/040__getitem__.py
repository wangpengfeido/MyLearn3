class Fib(object):
    # __getitem__可以使对象任意取第n项
    def __getitem__(self, n):
        a, b = 1, 1
        for x in range(n):
            a, b = b, a + b
        return a


f = Fib()
print(f[5])
print(f[10])
