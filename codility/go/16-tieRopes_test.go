package codility

import "testing"

func Test_tieRopes(t *testing.T) {
	tests := []struct {
		K    int
		A    []int
		want int
	}{
		{4, []int{1, 2, 3, 4, 1, 1, 3}, 3},
	}

	for i, tt := range tests {
		r := tieRopes(tt.K, tt.A)
		if r != tt.want {
			t.Errorf("%d: Want %d, got %d", i, tt.want, r)
		}
	}
}
