#include <string>;
// cctype 头中定义了字符特性判断函数
#include <cctype>;

int main(int argc, char const *argv[])
{
  std::string a1 = "aaa";

  // 使用range for语句遍历字符串中的字符。
  for (auto b : a1)
  {
    std::islower(b);
  }

  // 循环控制变量使用引用，控制变量就能绑定到字符串序列的每个字符上，就可以修改字符。
  for (auto &c : a1)
  {
    c = std::toupper(c);
  }

  // 使用下标运算符也可以取值赋值
  a1[1 + 1] = 'z';

  return 0;
}
