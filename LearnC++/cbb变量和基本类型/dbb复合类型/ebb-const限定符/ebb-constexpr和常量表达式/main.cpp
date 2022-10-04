int getNum()
{
  return 1;
}

int main(int argc, char const *argv[])
{
  // 常量表达式（const expression）是指值不会改变并且在编译过程就能得到计算结果的表达式。
  const int a = 1;     // 是
  const int b = a + 1; // 是
  int d = 1;           // 不是
  int e = getNum();    // 不是

  // 使用 constexpr 声明，编译器会校验其是一个常量表达式
  constexpr int f = 1;
  // constexpr int g = getNum(); // 不允许

  // 只有字面值类型能声明成constexpr
  // 指针和引用也能声明成constexpr，但其初始值只能是0、nullptr或存储于固定地址中的对象
  constexpr int *h = nullptr;
  // constexpr const int *i = &a; // 不允许。因为函数内定义的a变量不存储于固定地址中

  return 0;
}

// constexpr 声明的是顶层const
const int z = 0;
// constexpr int *y = &z; // 不允许。因为需要声明一个指向const的指针
constexpr const int *x = &z;
