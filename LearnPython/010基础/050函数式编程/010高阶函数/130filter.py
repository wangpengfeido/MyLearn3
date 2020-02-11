# filter过滤传入的元素。它也返回一个Iterator

def is_odd(n):
    return n % 2 == 1


l = [1, 2, 3, 4, 5, 6, 7]

r = filter(is_odd, l)

print(list(r))
