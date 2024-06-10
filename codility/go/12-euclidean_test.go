package codility

import "testing"

func BenchmarkGcd(b *testing.B) {
	for i := 0; i <= b.N; i++ {
		gcd(6, 20)
	}
}

func BenchmarkGcd2(b *testing.B) {
	for i := 0; i <= b.N; i++ {
		gcd2(6, 20, 1)
	}
}
