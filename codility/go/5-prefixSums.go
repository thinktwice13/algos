package codility

func passingCars(A []int) int {
	// track number of cars traveling east and multiply by each car traveling west
	east := 0
	passed := 0
	for _, car := range A {
		if car == 0 {
			east++
		} else {
			passed += east
		}
		if passed > 1000000000 {
			return -1
		}
	}

	return passed
}

func countDiv(A int, B int, K int) int {
	n := B/K - A/K
	if A%K == 0 {
		n++
	}
	return n
}

func genomicRangeQuery(S string, P []int, Q []int) []int {
	// we want to be able to compare two spots in the DNS without looping through it for each query
	// create an array of length S+1, where each index represents the number of nucleotides at that index
	// inner arrays serve as counters for each nucleotide impact at each position
	impacts := make([][4]int, len(S)+1)
	for i, nucleotide := range S {
		impacts[i+1] = impacts[i]
		switch nucleotide {
		case 'A':
			impacts[i+1][0]++
		case 'C':
			impacts[i+1][1]++
		case 'G':
			impacts[i+1][2]++
		case 'T':
			impacts[i+1][3]++
		}
	}
	// for CAGCCTA, this will look like [[0,0,0,0], [0,1,0,0], [0,1,1,0], [0,1,1,1], [1,1,1,1], [1,2,1,1], [1,2,1,1], [1,2,2,1]]

	results := make([]int, len(P))
	// for each query, try to find the smallest impact factor
	for i := range P {
		// for each impact, check if the impact at the end of the range is greater than the impact at the beginning of the range
		for j := 0; j < 4; j++ {
			if impacts[Q[i]+1][j]-impacts[P[i]][j] > 0 {
				results[i] = j + 1
				break
			}
		}
	}

	return results
}

func minAvgTwoSlice(A []int) int {
	// starting point is a slice of 2 [0,1]
	// for each next step, there are two options:
	// 1. keep first element and add next element (a total of 3 elements)
	// 2. remove first element and add next element (a total of 2 elements)
	// update best average if the average of the new slice is lower than the best average
	// There is never going to be more than three element contributing to the minimum average,
	// because removing higher border element will always result in a lower average.

	start := 0
	bestAvg := float64(A[0]+A[1]) / 2.0
	for i := 2; i < len(A); i++ {
		// option with included start element
		avg3 := float64(A[i-2]+A[i-1]+A[i]) / 3.0
		if avg3 < bestAvg {
			bestAvg = avg3
			start = i - 2
		}
		// a new slice, moved one element to the right
		avg2 := float64(A[i-1]+A[i]) / 2.0
		if avg2 < bestAvg {
			bestAvg = avg2
			start = i - 1
		}
	}

	return start
}
