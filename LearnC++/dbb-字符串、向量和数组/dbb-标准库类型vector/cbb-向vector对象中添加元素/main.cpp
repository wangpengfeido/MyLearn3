#include <vector>

using std::vector;

int main(int argc, char const *argv[])
{
  vector<int> v;
  for (int i = 0; i < 10; i++)
  {
    // 使用 push_back 添加元素
    v.push_back(i);
  }

  // vector 对象能高效增长

  return 0;
}
