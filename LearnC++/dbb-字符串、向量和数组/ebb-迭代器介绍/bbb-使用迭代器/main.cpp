#include <vector>
#include <string>

using std::string;
using std::vector;

struct A
{
  string name;
};

int main(int argc, char const *argv[])
{
  vector<A> v = {{name : ""}};

  // 返回指向第一个元素的迭代器
  auto a = v.begin();

  // 返回指向尾元素的下一位置的迭代器（尾后迭代器）
  auto b = v.end();

  // 返回迭代器所指元素的引用
  *a;

  // 解引用迭代器并取成员。相当于 (*a).name
  a->name;

  // 令迭代器指向下一个/上一个元素;
  ++a;
  --a;

  // 判断迭代器是否指向同一个元素
  a == b;
  a != b;

  // 返回 const_iterator。不可修改迭代器指向的值。
  v.cbegin();
  v.cend();

  return 0;
}
