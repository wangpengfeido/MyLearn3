int main(int argc, char const *argv[])
{
  const int a = 1;
  // int *b = &a; // 不允许
  const int *b = &a;

  int c = 1;
  // 指向常量的指针也可以指向非常量。但不可以通过常量指针修改。
  const int *d = &c;
  // *d = 2; // 不允许

  return 0;
}
