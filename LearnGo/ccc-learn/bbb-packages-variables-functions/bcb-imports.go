/** 导入 */

package main

// import "fmt"
// import "math"
// 可以使用多个导入语句，也可以使用分组语句
import (
	"fmt"
	"math"
)

func main() {
	fmt.Printf("Now you have %g problems.\n", math.Sqrt(7))
}
