#include <iostream>

int main(int argc, char const *argv[])
{
  // 引用是将引用和初始值“绑定”在一起。
  // 它可以看作是其他对象的别名
  int val = 1;
  int &refVal = val;
  std::cout << refVal << std::endl;

  // 为引用赋值相当于为其初始值赋值
  refVal = 2;
  std::cout << refVal << "," << val << std::endl;

  return 0;
}
