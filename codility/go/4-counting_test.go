package codility

import "testing"

func BenchmarkPermCheck(b *testing.B) {
	for n := 0; n < b.N; n++ {
		permCheck([]int{4, 1, 3, 2})
	}
}

func BenchmarkPermCheck2(b *testing.B) {
	for n := 0; n < b.N; n++ {
		permCheck2([]int{4, 1, 3, 2})
	}
}
