package codility

// factors of 24 are 1, 2, 3, 4, 6, 8, 12, 24
func countFactors(n int) int {
	if n == 1 {
		return 1
	}

	var count int
	f := 1
	// check symmetrical factors, count both sides
	for f*f < n {
		if n%f == 0 {
			count += 2
		}
		f++
	}

	// check exact sqrt, count it once
	if n%(f*f) == 0 {
		count++
	}

	return count
}
