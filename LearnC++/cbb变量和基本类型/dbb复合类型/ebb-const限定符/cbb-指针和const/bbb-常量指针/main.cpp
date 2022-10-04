int main(int argc, char const *argv[])
{
  int a = 1;
  // 从右向左阅读。首先b是一个常量，常量装的是一个指针。常量指针不允许修改指向。
  int *const b = &a;
  // b = &a; // 不允许

  return 0;
}
