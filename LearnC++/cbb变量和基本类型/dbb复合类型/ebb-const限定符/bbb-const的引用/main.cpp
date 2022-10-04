int main(int argc, char const *argv[])
{
  const int a = 1;

  // const 的引用。它的意思是“对常量对象的引用”，而不是值引用本身是个常量，虽然C++本身不支持修改引用。
  const int &b = a;

  // const 引用也可以是一个字面值常量
  const int &c = 1;

  // const 引用也可以引用一个非常量对象
  int d = 1;
  const int &e = d;
  // &e = 2; // 不允许

  return 0;
}
