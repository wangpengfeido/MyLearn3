#include <cstring>

int main(int argc, char const *argv[])
{
  // C字符串：字符放在数组中并以空字符结束
  char ca[] = {'a', 'b', 'c', '\0'};
  char ca2[] = "abc";

  // 获取字符串长度
  std::strlen(ca);

  // 字符串比较
  std::strcmp(ca, ca2);

  char ca3[10];
  // 字符串拷贝
  std::strcpy(ca3, ca);
  // 在字符串后面加字符
  std::strcat(ca3, "de");

  return 0;
}
