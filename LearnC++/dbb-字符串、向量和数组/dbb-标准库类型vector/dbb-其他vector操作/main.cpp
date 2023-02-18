#include <vector>

using std::vector;

int main(int argc, char const *argv[])
{
  vector<int> v;

  // 判断是否为空
  v.empty();

  // 获取长度
  v.size();

  // 添加元素
  v.push_back(1);

  // 取元素
  v[0];

  // 用 v 的元素拷贝替换 v2 的元素
  vector<int> v2 = v;

  // 用列表元素拷贝替换 v3 的元素
  vector<int> v3 = {1, 2, 3};

  // 所有元素相等
  v2 == v3;
  v2 != v3;

  // 按顺序比较
  v2 < v3;

  return 0;
}
