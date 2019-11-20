sum = 0
i = 0
while i < 10:
    if i % 2 == 0:
        i += 1
        continue
    sum += i
    i+=1
print(sum)
