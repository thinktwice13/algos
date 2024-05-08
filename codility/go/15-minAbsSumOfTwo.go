package golang

import (
	"math"
	"slices"
)

// find min abs(a+b)
func minAbsSum(A []int) int {
	slices.Sort(A)
	best := math.MaxInt // or 2000000000 because max number in A is 1000000000
	left, right := 0, len(A)-1
	for left <= right {
		sum := A[left] + A[right]
		if sum < 0 {
			sum *= -1
		}
		if sum < best {
			best = sum
		}

		// move pointers. Since the slice is sorted, we always attempt to go towards the middle, where values with lesser effect are
		if math.Abs(float64(A[left])) > math.Abs(float64(A[right])) {
			left++
		} else {
			right--
		}
	}

	return best
}
