package codility

func nonDivisible(A []int) []int {
	// Count each element
	counts := map[int]int{}
	maxElement := -1
	for _, el := range A {
		if _, ok := counts[el]; !ok {
			counts[el] = 0
		}
		counts[el]++

		if el > maxElement {
			maxElement = el
		}
	}

	// Run divisors. Mark multiples of each element by found count. We'll use it to sum divisors
	divisors := make(map[int]int, len(counts))
	for el, cnt := range counts {
		for i := el; i <= maxElement; i += el {
			if _, ok := divisors[i]; !ok {
				divisors[i] = 0
			}
			divisors[i] += cnt
		}
	}

	nonDivisors := make([]int, len(A))
	for i, el := range A {
		nonDivisors[i] = len(A) - divisors[el]
	}

	return nonDivisors
}
