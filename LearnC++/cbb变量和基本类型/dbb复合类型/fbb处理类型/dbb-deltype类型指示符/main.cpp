int main(int argc, char const *argv[])
{
  // decltype 分析表达式的结果类型，但不实际计算表达式的值
  decltype(1 + 1) b = 1;

  const int a1 = 1;
  const int &a2 = a1;
  const int *a3 = &a1;

  // 如果 decltype 表达式是一个变量。decltype会返回变量的类型，包含顶层const和引用
  decltype(a1) c = 1;
  decltype(a2) d = a2;

  decltype(a2) e = 1;     // int&
  decltype(a2 + 0) f = 1; // int
  // 对指针类型将返回一个引用类型
  decltype(*a3) g = a1; // int&

  // 将变量添加括号，结果将不同。编译器会将加括号的变量当作可作为赋值语句左值的表达式处理，得到一个引用
  decltype((a1)) h = 1;

  return 0;
}
