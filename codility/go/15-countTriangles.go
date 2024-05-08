package golang

import (
	"slices"
)

// find triplets that can form a triangle (a+b>c, a+c>b, b+c>a)
func countTriangles(A []int) int {
	// sort the slice for easier triangle detection (when sorted we only need to check if sum of two shorter sides > longest side
	slices.Sort(A)
	var count int

	for back := 0; back < len(A)-2; back++ {
		// Always start with the longest side two positions away from the shortest one
		front := back + 2
		for mid := back + 1; mid < len(A)-1; mid++ {
			// search for matching front as long as triangle can be formed. We'll count them all later
			// this works because if we can form a triangle with 5, 8 and 12, then we can also form it with all the values > 8 and < 12
			for front < len(A) && A[back]+A[mid] > A[front] {
				front++
			}
			// this front cannot form a triangle with shorter sides. Count all between mid and front, but not the last one
			count += front - mid - 1
		}
	}

	return count
}
