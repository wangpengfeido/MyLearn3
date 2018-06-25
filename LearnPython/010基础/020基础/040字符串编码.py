# ord()获取字符的unicode整数表示，chr()把编码数字转换为字符
print(ord('𠮷'), chr(134071))
# ?如何用\u表示四字节的unicode字符
print('\uF0A0\uAEB7')

# b''表示字节类型
print(b'A')

# str.encode(编码方式)将unicode字符串编码为指定编码方式的字节。注意，如果超过编码范围将报错
# bytes.decode(编码方式[,errors='ignore'])将指定编码方式的字节编码为unicode
print('𠮷'.encode('utf-8'), b'\xf0\xa0\xae\xb7'.decode('utf-8'))

# len(str/bytes)计算字符串/字节长度
print(len('𠮷'), len('𠮷'.encode('utf-8')))
