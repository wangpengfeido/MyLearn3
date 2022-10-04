#include <iostream>;

// 使用std命名空间中的cout
using std::cout;

int main(int argc, char const *argv[])
{
  // cout 可以直接使用了。
  cout << 'a';

  return 0;
}

// 注意：头文件不应包含using声明