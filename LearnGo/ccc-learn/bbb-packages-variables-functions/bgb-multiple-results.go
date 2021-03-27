/** 多值返回 */

package main

import "fmt"

func swap(x, y string) (string, string) {
	// 函数可返回多个值
	return y, x
}

func main() {
	a, b := swap("hello", "world")
	fmt.Println(a, b)
}
