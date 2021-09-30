#include <iostream>

int main(int argc, char const *argv[])
{
  int i = 1;

  int *p = &i;
  int **q = &p;

  std::cout << **q << std::endl;

  return 0;
}
