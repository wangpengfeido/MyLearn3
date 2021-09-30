#include <iostream>

int main(int argc, char const *argv[])
{
  int i = 1;

  int *p = &i;
  // 从右往左最近的符号对变量有最直接的影响
  int *&q = p;

  std::cout << *q << std::endl;

  return 0;
}
