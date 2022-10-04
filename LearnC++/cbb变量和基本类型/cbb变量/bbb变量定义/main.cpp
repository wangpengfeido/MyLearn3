int main(int argc, char const *argv[])
{
  int a = 1;
  int b(1);
  // 列表初始化。不会丢失精度。存在丢失精度风险时，编译器会报错。
  int c = {1};
  int d{1};

  return 0;
}
