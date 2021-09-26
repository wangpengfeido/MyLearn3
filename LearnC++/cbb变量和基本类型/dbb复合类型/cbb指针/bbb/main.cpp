#include <iostream>

int main(int argc, char const *argv[])
{
  int i = 1;

  // 指针类型是直接保存了地址
  int *j;
  // 使用 取地址运算符& 为其赋值
  j = &i;

  // 使用 解引用运算符* 取其值
  std::cout << *j << std::endl;

  // 为解引用的结果赋值，也就是为指针指向的对象赋值
  *j = 2;
  std::cout << *j << "," << i << std::endl;

  return 0;
}
