int main(int argc, char const *argv[])
{

  typedef int *B;

  // 下面这一句的意思是，指向int的常量指针（顶层const），而非指向const int的指针（底层const）
  const B a = 0;
  // 相当于 int *const a = 0;
  // 不是 const int *a = 0;

  return 0;
}
