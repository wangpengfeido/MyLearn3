#include <iostream>

int main(int argc, char const *argv[])
{
  int v, res = 0;

  // 当输入eof符号，或输入不符合类型时，instream状态变为无效
  while (std::cin >> v)
  {
    res += v;
  }

  std::cout << res << std::endl;

  return 0;
}
