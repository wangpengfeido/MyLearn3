/** 导出名 */

package main

import (
	"fmt"
	"math"
)

func main() {
	// 如果一个名字以大写字母开头，它就是已导出的。小写字母开头是未导出的。
	// fmt.Println(math.pi)
	fmt.Println(math.Pi)
}
