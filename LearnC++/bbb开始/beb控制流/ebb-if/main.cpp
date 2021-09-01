#include <iostream>

int main(int argc, char const *argv[])
{
  int v1 = 1, v2 = 2;

  if (v1 + v2 > 2)
  {
    std::cout << "大于2" << std::endl;
  }
  else
  {
    std::cout << "不大于2" << std::endl;
  }

  return 0;
}
