package golang

func commonPrimeDivisors(N, M []int) int {
	var count int
	for i := 0; i < len(N); i++ {
		if primeDivsEqual(N[i], M[i]) && primeDivsEqual(M[i], N[i]) {
			count++
		}
	}

	return count
}

func primeDivsEqual(a, b int) bool {
	if b == 1 {
		return true
	}
	d := gcd(a, b)
	if d == 1 {
		// They don't have a common divisor
		return false
	}

	return primeDivsEqual(a, b/d)
}
