#include <iostream>

int main(int argc, char const *argv[])
{
  std::cout << "number:"
            << 020 << "," << 0xa
            << "," << 3.14 << "," << 1e0
            << std::endl;

  std::cout << "char and string:"
            // 单引号字符。
            << 'c'
            // 双引号字符串。字符串实际上是字符数组(并不是std::string类型)。
            << ","
            << "string"
               "string newline"
            << std::endl;

  std::cout << "escape:"
            << '\a'
            << '\7'
            << std::endl;

  std::cout << "assign:"
            << "," << u"a"
            << "," << U"a"
            << "," << L"a"
            << "," << 1u
            << "," << 1L
            << "," << 1UL
            << "," << 1LL
            << "," << 1ULL
            << "," << 1.1F
            << "," << 1.1L
            << std::endl;

  return 0;
}
