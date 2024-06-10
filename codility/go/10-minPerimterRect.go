package codility

import "math"

func minPerimeterRect(N int) int {
	// one of the dividers will be a sqrt or its integer
	// 5 => 2
	// 6 => 2
	// 7 => 2
	// 9 => 3
	// lower it to find the whole number equivalent:
	// 5 => 1
	// 6 => 2
	// 7 => 1
	// 9 => 3
	n := float64(N)
	maxDiv := math.Floor(math.Sqrt(n))

	for d1 := maxDiv; d1 > 1; d1-- {
		// if d2 is integer and d1*d2 equals N, we're done
		d2 := n / d1
		if d2 == math.Floor(d2) && d1*d2 == n {
			return int(2 * (d1 + d2))
		}
	}

	// none found. maxDiv is a prime number: d1 = 1, d2 = N, 2 * (N+1)
	return 2 + 2*N
}
