/** 命名返回值 */

package main

import "fmt"

// 可以对返回值进行命名
func split(sum int) (x, y int) {
	x = sum * 4 / 9
	y = sum - x
	return
}

func main() {
	fmt.Println(split(17))
}
