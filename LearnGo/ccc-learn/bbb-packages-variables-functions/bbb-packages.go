package main

import (
	"fmt"
	// 导入包。
	// 约定包名与路径的最后一个元素一致。例如此处包名为 rand。
	"math/rand"
)

func main() {
	fmt.Println("My favorite number is", rand.Intn(10))
}
