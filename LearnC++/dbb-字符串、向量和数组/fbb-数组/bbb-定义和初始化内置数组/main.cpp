int main(int argc, char const *argv[])
{
  int arr1[3];
  // 初始化数组中的元素
  int arr2[3] = {0, 1};
  // 相当于 arr3[3] = {0, 1, 2};
  int arr3[] = {0, 1, 2};

  // 数组初始化长度必须是常量表达式
  unsigned n1 = 1;
  constexpr unsigned n2 = 1;
  // arr1[n1]; //不允许
  arr1[n2]; // 允许

  // 可以使用字符串初始化数组
  // 相当于 arr4[] = {'a','b','c','\0'}
  char arr4[] = "abc";

  // 不能将一个数组直接给另一个数组赋值
  // int arr5[] = arr1; // 不允许

  // 含有指针的数组
  int *arr6[1];
  // 不允许，不存在引用的数组
  // int &arr7[1];
  // 一个指向数组的指针
  int(*arr8)[] = &arr1;
  // 一个数组的引用
  int(&int9)[] = arr1;

  return 0;
}
