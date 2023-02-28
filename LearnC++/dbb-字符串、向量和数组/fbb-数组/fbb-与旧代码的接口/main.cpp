#include <string>;
#include <vector>;

using std::string;
using std::vector;

int main(int argc, char const *argv[])
{
  // 对于 std::string 对象支持字符串字面量(字符数组)的操作
  string str = "abc";
  char ca[] = {'a', 'b', 'c', '\0'};
  string str2 = ca;
  str + ca;

  // 将 string 转换为 c 字符串
  const char *ca2 = str.c_str();

  int arr[] = {1, 2, 3};

  // 使用数组初始化vector。指定首尾指针即可。
  vector<int> v(std::begin(arr), std::end(arr));

  return 0;
}
