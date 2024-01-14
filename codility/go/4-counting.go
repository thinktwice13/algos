package golang

import "sort"

// https://app.codility.com/programmers/lessons/4-counting_elements/frog_river_one/
func frogRiverOne(X int, A []int) int {
	// record when a leaf falls at each position
	leaves := make(map[int]bool, X)
	for i := 0; i < len(A); i++ {
		leaves[A[i]] = true
		if len(leaves) == X {
			return i
		}
	}

	return -1
}

// https://app.codility.com/programmers/lessons/4-counting_elements/perm_check/
func permCheck(A []int) int {
	sort.Ints(A)
	// check if the array is a permutation
	for i := 0; i < len(A); i++ {
		if A[i] != i+1 {
			return 0
		}
	}
	return 1
}

func permCheck2(A []int) int {
	// use XOR to match number with index + 1
	// array is a permutation if the result is 0
	num := 0
	for i := 0; i < len(A); i++ {
		num ^= A[i] ^ (i + 1)
	}
	if num == 0 {
		return 1
	} else {
		return 0
	}
}

// https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/
func maxCounters(N int, A []int) []int {
	counters := make([]int, N)
	currMax := 0
	lastMaxOut := 0
	for i := 0; i < len(A); i++ {
		if A[i] == N+1 {
			// set all counters to the last max
			lastMaxOut = currMax
		} else {
			// increase single counter
			// if above lastMaxOut, increase it by 1
			// if lower or equal to lastMaxOut, set it to lastMaxOut + 1
			// check if it is the new max
			if counters[A[i]-1] <= lastMaxOut {
				counters[A[i]-1] = lastMaxOut + 1
			} else {
				counters[A[i]-1]++
			}

			if counters[A[i]-1] > currMax {
				currMax = counters[A[i]-1]
			}
		}
	}

	// set all counters lower or equal to lastMaxOut to lastMaxOut
	for i := 0; i < N; i++ {
		if counters[i] < lastMaxOut {
			counters[i] = lastMaxOut
		}
	}

	return counters
}

// https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/
// find smallest missing positive integer
func missingInteger(A []int) int {
	found := make([]bool, len(A)+1)
	// record any found values. Ignore negatives, duplicates and values larger than the array
	for _, a := range A {
		if a > 0 && a <= len(A) {
			found[a] = true
		}
	}

	// find the first missing value (false). Ignore index 0
	for i := 1; i <= len(A); i++ {
		if !found[i] {
			return i
		}
	}

	return len(A) + 1
}
