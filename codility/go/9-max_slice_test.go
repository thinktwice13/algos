package golang

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
