// 将 struct 单独定义

// 使用预处理器，保证头文件只被执行一次
#ifndef A_H
#define A_H

#include <string>

struct A
{
  int a = 1;
};

#endif
