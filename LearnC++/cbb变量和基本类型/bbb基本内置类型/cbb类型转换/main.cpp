#include <iostream>

int main(int argc, char const *argv[])
{
  if (1)
  {
    std::cout << "1 convert to true" << std::endl;
  }

  int a1 = 1;
  unsigned long a2 = a1;
  std::cout << "int convert to unsigned long:" << a2;

  return 0;
}
