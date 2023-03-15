int main(int argc, char const *argv[])
{
  int a[3][4] = {
      {0, 1, 2, 3},
      {0, 1, 2, 3},
      {0, 1, 2, 3},
  };

  // 与上面相同
  int a2[3][4] = {0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3};

  int i = a[0][0];

  int *i2 = a[0];
  int(&i3)[4] = a[0];

  int(*i4)[4] = a;

  return 0;
}
