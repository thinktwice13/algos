package codility

func gcd(a, b int) int {
	// Do not check which is bigger. It gets reversed in the next step if b > a
	if a == b {
		return a
	}
	m := a % b
	if m == 0 {
		return b
	}
	return gcd(b, m)
}

// O(log(a+b))
func gcd2(a, b, res int) int {
	if a == b {
		return a * res
	}

	// Attempt flooring any of a or b or both
	if a%2 == 0 && b%2 == 0 {
		return gcd2(a/2, b/2, 2*res)
	}
	if a%2 == 0 {
		return gcd2(a/2, b, res)
	}
	if b%2 == 0 {
		return gcd2(a, b/2, res)
	}

	// Attempt deduction
	if a > b {
		return gcd2(a-b, b, res)
	} else {
		return gcd2(a, b-a, res)
	}
}

func lcm(a, b int) int {
	return (a * b) / gcd2(a, b, 1)
}
