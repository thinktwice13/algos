package codility

func chocolates(N, M int) int {
	return N / gcd(N, M)
}
