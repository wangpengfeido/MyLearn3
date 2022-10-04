int main(int argc, char const *argv[])
{
  // 顶层const表示对象本身是常量
  // 底层const表示引用和指针指向的对象是常量

  int a = 0;
  const int c = a;         // 顶层const
  int *const b = &a;       // 顶层const
  const int *d = &a;       // 底层const
  const int *const e = &a; // 右边是顶层const；左边是底层const
  const int &f = a;        // 底层const

  // 底层const拷贝时不受影响，顶层const拷贝时只能从非常量拷贝到常量
  int g = 1;
  d = &g; // 允许
  // b = &g; // 不允许

  return 0;
}
