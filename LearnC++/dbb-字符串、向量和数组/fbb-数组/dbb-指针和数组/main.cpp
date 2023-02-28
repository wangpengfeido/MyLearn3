#include <vector>

int main(int argc, char const *argv[])
{

  int arr[] = {0, 1, 2, 3, 4};

  // 指向数组第一个元素
  int *p1 = &arr[0];

  // 相当于  *p1 = &arr[0];
  // 数组实际是指向第一个元素的指针
  int *p2 = arr;

  // arr2 被推断为 int* 类型
  auto arr2 = arr;

  // 使用 decltype 时不同，arr3 被推断为数组类型
  decltype(arr) arr3 = {};

  // 数组元素指针也是一个迭代器
  // 可以执行迭代器相关的操作
  p1++;

  // 获取迭代器首元素和尾元素
  std::begin(arr);
  std::end(arr);

  int *p3 = &arr[2];
  // 3。相当于arr[3]
  p3[1];
  // 1。相当于arr[1]
  p3[-1];

  return 0;
}
