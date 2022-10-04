#include <string>

using std::string;

int main(int argc, char const *argv[])
{
  string s1;
  string s2 = s1;     // 创建副本
  string s3 = "aaa";  // 字面量
  string s4(10, 'a'); // 重复10次a

  // 使用=的初始化为拷贝初始化。把等号右侧的初始值拷贝到新创建的对象中去
  string s5 = s1;
  // 使用括号的是直接初始化
  string s6(s1);
  string s7(10, 'a');

  return 0;
}
