package codility

import "testing"

func Test_maxProfit(t *testing.T) {
	tests := []struct {
		in  []int
		exp int
	}{
		{[]int{23171, 21011, 21123, 21366, 21013, 21367}, 356},
	}

	for _, tt := range tests {
		r := maxProfit(tt.in)
		if r != tt.exp {
			t.Errorf("%v: Want %d, got %d", tt.in, tt.exp, r)
		}
	}
}

func Test_maxDoubleSliceSum(t *testing.T) {
	tests := []struct {
		in   []int
		want int
	}{
		//{[]int{3, 2, 6, -1, 4, 5, -1, 2}, 17},
		//{[]int{1, 1, 1}, 0},
		{[]int{3, 2, -1, 6}, 2},
	}

	for i, tt := range tests {
		r := maxDoubleSliceSum(tt.in)
		if r != tt.want {
			t.Errorf("%d: Want %d, got %d", i, tt.want, r)
		}
	}
}
