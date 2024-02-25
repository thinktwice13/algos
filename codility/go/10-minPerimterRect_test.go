package golang

import "testing"

func Test_minPerimeterRect(t *testing.T) {
	tests := []struct {
		in  int
		out int
	}{
		{1, 4},
		{2, 6},
		{3, 8},
		{4, 8},
		{5, 12},
		{25, 20},
		{30, 22},
		{31, 64},
	}

	for _, tt := range tests {
		r := minPerimeterRect(tt.in)
		if tt.out != r {
			t.Errorf("%d: want %d, got %d", tt.in, tt.out, r)
		}
	}
}
