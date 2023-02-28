#include <vector>

using std::vector;

int main(int argc, char const *argv[])
{
  vector<int> v1;
  vector<int> v2(v1);            // v2 中包含所有v1的副本
  vector<int> v3 = v1;           // 同上
  vector<int> v4(10, 1);         // 包含10个重复元素
  vector<int> v5(10);            // 包含10个执行了值初始化的对象
  vector<int> v6{1, 2, 3, 4};    // 包含了若干个元素
  vector<int> v7 = {1, 2, 3, 4}; // 同上

  // 当列表初始化中类型于与元素类型不同时，会尝试用默认值初始化
  vector<char> v10 = {10, 1}; // 相当于  vector<char> v10(10, 1)

  // 使用迭代器初始化
  vector<int> v11(v1.begin() + 1, v1.end() - 2);

  return 0;
}
