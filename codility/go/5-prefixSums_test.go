package codility

import "testing"

func Test_countDiv(t *testing.T) {
	tests := []struct {
		A, B, K, want int
	}{
		{6, 11, 2, 3},
		{6, 12, 2, 4},
		{6, 13, 2, 4},
		{7, 11, 2, 2},
		{7, 12, 2, 3},
		{1, 1, 1, 1},
	}

	for _, tt := range tests {
		if got := countDiv(tt.A, tt.B, tt.K); got != tt.want {
			t.Errorf("countDiv(%v, %v, %v) = %v, want %v", tt.A, tt.B, tt.K, got, tt.want)
		}
	}
}
