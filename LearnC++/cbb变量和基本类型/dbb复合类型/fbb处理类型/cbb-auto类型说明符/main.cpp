int main(int argc, char const *argv[])
{
  int a1 = 1;
  int &a2 = a1;
  const int a3 = 1;
  const int *a4 = &a1;

  // 自动判断类型
  auto c = a1 + a2, *d = &a1;

  // 使用引用对象初始化时，相当于使用引用对象的值初始化
  auto e = a2;
  // 引用可以重新声明
  auto &e = a2;

  // 顶层const会被忽略,底层const会被保留
  auto f = a3;
  auto g = a4;
  // 顶层const需要重新声明
  const auto h = a3;

  return 0;
}
