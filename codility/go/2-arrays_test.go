package golang

import (
	"testing"
)

func Test_cyclicRotation(t *testing.T) {
	tests := []struct {
		list []int
		k    int
		exp  []int
	}{
		//{list: []int{3, 8, 9, 7, 6}, k: 3, exp: []int{9, 7, 6, 3, 8}},
		{list: []int{5, -1000}, k: 1, exp: []int{-1000, 5}},
	}

	for _, tt := range tests {
		res := cyclicRotation(tt.list, tt.k)
		if !equal(res, tt.exp) {
			t.Errorf("Expected %v, got %v", tt.exp, res)
		}
	}
}

func equal(res []int, exp []int) bool {
	if len(res) != len(exp) {
		return false
	}

	for i := range res {
		if res[i] != exp[i] {
			return false
		}
	}

	return true
}
