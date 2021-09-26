#include <iostream>

int resused = 42;

int main(int argc, char const *argv[])
{
  // 42
  std::cout << resused << std::endl;

  int resused = 0;
  // 0
  std::cout << resused << std::endl;

  // 42
  std::cout << ::resused << std::endl;

  return 0;
}
