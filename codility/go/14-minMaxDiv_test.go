package golang

import "testing"

func Test_minMaxDiv(t *testing.T) {
	tests := []struct {
		K, M int
		A    []int
		want int
	}{
		//{3, 5, []int{2, 1, 5, 1, 2, 2, 2}, 6},
		{2, 1, []int{4, 4}, 4},
	}

	for _, tt := range tests {
		r := minMaxDiv(tt.K, tt.M, tt.A)
		if r != tt.want {
			t.Errorf("%v: Want %d, got %d", tt, tt.want, r)
		}
	}
}
