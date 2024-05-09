package golang

import "testing"

func Test_maxNonOverlappingSegments(t *testing.T) {
	tests := []struct {
		A, B []int
		want int
	}{
		{[]int{1, 3, 7, 9, 9}, []int{5, 6, 8, 9, 10}, 3},
	}

	for i, tt := range tests {
		r := maxNonOverlappingSegments(tt.A, tt.B)
		if r != tt.want {
			t.Errorf("%d: Want %d, got %d", i, tt.want, r)
		}
	}
}
