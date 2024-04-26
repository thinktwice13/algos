package golang

func ladder(A, B []int) []int {
	// number of combinations to traverse staircase match numOfSteps = fibAtPosition+1
	// we need to find a fib number that is one higher than the number of steps
	var maxSteps int
	for _, a := range A {
		if a > maxSteps {
			maxSteps = a
		}
	}

	// there are only two possible ways to make a step, so this will match the fibonacci sequence
	// can be easily extended to 3+: use i-3 + i-2 + i-1
	// we later want to use A[numOfSteps] to get the result, plus we'll use one helper item for fib sequence
	combos := make([]int, maxSteps+2)
	combos[0], combos[1] = 0, 1
	for i := 2; i < len(combos); i++ {
		combos[i] = combos[i-2] + combos[i-1]
	}

	// the trick to speeding up the calculation is to use bitwise AND instead od modulo for large numbers
	// remove helper item from fibs
	combos = combos[1:]
	// memo powers of two as length of B can be up to 50000 with only 30 distinct numbers, per task requirement
	modMemo := make(map[int]int64)
	result := make([]int, len(A))
	for i := range result {
		if _, ok := modMemo[B[i]]; !ok {
			modMemo[B[i]] = 1 << B[i]
		}

		combos := combos[A[i]]
		m := modMemo[B[i]] - 1
		result[i] = int(int64(combos) & m)
	}

	return result
}
