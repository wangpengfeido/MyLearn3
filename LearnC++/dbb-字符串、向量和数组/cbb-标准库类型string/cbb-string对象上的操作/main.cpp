#include <iostream>
#include <string>

using std::cout;
using std::endl;
using std::string;

int main(int argc, char const *argv[])
{
  string a1 = "aaa";
  string a2 = "bbb";

  cout << a1 << endl;
  auto b = a1.empty();
  // size() 返回 std::size_t 类型
  auto c = a1.size();
  a1 == a2;
  a1 > a2;
  a1 + a2;
  a1 + "ccc" + 'c';
  // "c" + "c"; // 不允许。字面值不能直接相加。"xxx"字面值并不是string类型。
  // "c" + "c" + a1; // 不允许
  "c" + a1 + "c"; // 允许

  // 将a2的值拷贝给a1
  a1 = a2;

  return 0;
}
