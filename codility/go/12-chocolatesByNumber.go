package golang

// https://app.codility.com/programmers/lessons/12-euclidean_algorithm/chocolates_by_numbers/

func chocolates(N, M int) int {
	return N / gcd(N, M)
}
