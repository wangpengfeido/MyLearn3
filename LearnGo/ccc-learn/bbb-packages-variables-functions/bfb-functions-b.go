/** 函数2 */

package main

import "fmt"

// 当连续多个形参类型相同，可只写最后一个
func add(x, y int) int {
	return x + y
}

func main() {
	fmt.Println(add(42, 13))
}
