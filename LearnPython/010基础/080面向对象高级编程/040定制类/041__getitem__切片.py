class Fib(object):
    def __getitem__(self, n):
        if isinstance(n, int):
            a, b = 1, 1
            for x in range(n):
                a, b = b, a + b
            return a
        # 判断传入的是切片对象
        if isinstance(n, slice):
            start = n.start
            stop = n.stop
            if start is None:
                start = 0
            a, b = 1, 1
            L = []
            for x in range(stop):
                if x > start:
                    L.append(a)
                a, b = b, a + b
            return L


f = Fib()
# 我们还可以使用切片，这样传给__getitem__的是一个切片对象
print(f[5:10])
