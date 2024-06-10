package codility

func semiPrimes(N int, P, Q []int) []int {
	result := make([]int, len(P))

	if N < 4 {
		return result
	}

	// Init sieve to mark each factor from 1 to N+1 (N+1 to account for zero-index)
	sieve := make([]int, N+1)
	for i := 2; i*i <= N; i++ {
		if sieve[i] == 0 {
			// Mark every multiple of i from its square to N
			k := i * i
			for k <= N {
				if sieve[k] == 0 {
					sieve[k] = i
				}
				k += i
			}
		}
	}

	// Loop sieve and count aggregate semiprimes for each position. First semiprime is 4 (2*2)
	semis := make([]int, N+1)
	for i := 4; i < len(sieve); i++ {
		// Copy aggregate count from last number
		semis[i] = semis[i-1]

		// Skip primes
		if sieve[i] == 0 {
			continue
		}

		// Check if semiprime by dividing i by its first prime factor. If sieve[result] is zero, it's a semiprime
		if sieve[i/sieve[i]] == 0 {
			semis[i]++
		}
	}

	// Count diffs
	for i := 0; i < len(P); i++ {
		result[i] = semis[Q[i]] - semis[P[i]-1]
	}
	return result
}
