package codility

import "testing"

func Test_minAbsSum(t *testing.T) {
	tests := []struct {
		A    []int
		want int
	}{
		{[]int{1, 4, -3}, 1},
		{[]int{-8, 4, 5, -10, 3}, 3},
	}

	for i, tt := range tests {
		r := minAbsSum(tt.A)
		if r != tt.want {
			t.Errorf("%d: Want %d, got %d", i, tt.want, r)
		}
	}
}
