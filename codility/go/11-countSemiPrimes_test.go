package golang

import (
	"fmt"
	"testing"
)

func Test_semiPrimes(t *testing.T) {
	fmt.Println(semiPrimes(26, []int{1, 4, 16}, []int{26, 10, 20}))
}
