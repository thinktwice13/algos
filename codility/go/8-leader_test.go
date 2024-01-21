package golang

import "testing"

func Test_equiLeader(t *testing.T) {
	tests := []struct {
		in  []int
		exp int
	}{
		//{[]int{4, 3, 4, 4, 4, 2}, 2},
		//{[]int{1}, 0},
		{[]int{0, 0}, 1},
		{[]int{1, 1}, 1},
		{[]int{1, 2, 3}, 0},
		{[]int{1, 2, 1}, 0},
		{[]int{1, 1, 1}, 2},
		{[]int{1, 2, 1, 2}, 0},
	}

	for i, tt := range tests {
		r := equiLeader(tt.in)
		if r != tt.exp {
			t.Errorf("%d: Expected %d, got %d", i, tt.exp, r)
		}
	}
}
