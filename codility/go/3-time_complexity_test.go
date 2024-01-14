package golang

import "testing"

func Benchmark_permMissingElem(b *testing.B) {
	list := []int{2, 3, 1, 5}
	for i := 0; i < b.N; i++ {
		permMissingElem(list)
	}
}

func Benchmark_permMissingElem2(b *testing.B) {
	list := []int{2, 3, 1, 5}
	for i := 0; i < b.N; i++ {
		permMissingElem2(list)
	}
}
