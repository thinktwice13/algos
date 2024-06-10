package codility

import "testing"

func Test_countFactors(t *testing.T) {
	tests := []struct {
		in   int
		want int
	}{
		{1, 1},
		{2, 2},
		{3, 2},
		{4, 3},
		{5, 2},
		{6, 4},
		{7, 2},
		{24, 8},
	}

	for i, tt := range tests {
		r := countFactors(tt.in)
		if r != tt.want {
			t.Errorf("%d: Want %d, got %d", i, tt.want, r)
		}
	}
}
