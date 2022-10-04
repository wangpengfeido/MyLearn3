#include <iostream>

int main(int argc, char const *argv[])
{

  // struct,只有数据成员的类
  struct A
  {
    // 数据成员，可以提供一个初始值
    int a = 1;
  };

  // 使用 struct
  A a;

  std::cout << a.a;

  return 0;
}
