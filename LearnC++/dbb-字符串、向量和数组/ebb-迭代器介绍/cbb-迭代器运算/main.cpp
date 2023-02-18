#include <vector>

using std::vector;

int main(int argc, char const *argv[])
{
  vector<int> v = {1};

  auto a = v.begin();
  auto b = v.end();

  // 将迭代器向前/向后移动 n 步，得到一个新的迭代器
  a + 1;
  a - 1;

  // 复合赋值
  a += 1;
  a -= 1;

  // 两个迭代器相减得到它们之间的距离
  b - a;

  // 比较两个迭代器的位置
  a > b;

  return 0;
}
