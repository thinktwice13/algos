package golang

import "testing"

func Test_peaks(t *testing.T) {
	tests := []struct {
		A    []int
		want int
	}{
		{[]int{1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2}, 3},
		//{[]int{0, 1, 0, 0, 0}, 1},
		//{[]int{0, 0, 0, 0, 0, 0, 0}, 0},
	}

	for i, tt := range tests {
		r := peaks(tt.A)
		if r != tt.want {
			t.Errorf("%d: Want %d, got %d", i, tt.want, r)
		}
	}
}
