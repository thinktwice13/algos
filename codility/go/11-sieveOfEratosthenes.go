package codility

import "fmt"

func primes() {
	fmt.Println(fact(20)) // Gets primes [2 2 5]
}

func sieve(n int) []int {
	s := make([]int, n+1)
	i := 2
	for i*i <= n {
		if s[i] == 0 {
			k := i * i
			for k <= n {
				if s[k] == 0 {
					s[k] = i
				}
				k += i
			}
		}

		i++
	}

	return s
}

func fact(n int) []int {
	s := sieve(n)
	fmt.Println(s)
	var primes []int
	// As long as the value at sieve position n is greater than 0, record it as a factor and divide n by it
	// When value on sieve position n is zero, append n as a last prime factor
	for s[n] > 0 {
		primes = append(primes, s[n])
		n /= s[n]
	}
	primes = append(primes, n)
	return primes
}
