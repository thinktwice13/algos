package leetcode

import "testing"

func Test_q53(t *testing.T) {
	tests := []struct {
		nums []int
		exp  int
	}{
		{nums: []int{-2, 1, -3, 4, -1, 2, 1, -5, 4}, exp: 6},
		{nums: []int{1}, exp: 1},
		{nums: []int{0}, exp: 0},
		{nums: []int{-1}, exp: -1},
	}

	for _, tt := range tests {
		res := q53(tt.nums)
		if res != tt.exp {
			t.Errorf("Expected %d, got %d", tt.exp, res)
		}
	}
}
