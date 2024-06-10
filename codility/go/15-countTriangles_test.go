package codility

import "testing"

func Test_countTriangles(t *testing.T) {
	tests := []struct {
		A    []int
		want int
	}{
		{[]int{}, 0},
		{[]int{1, 2, 5, 8, 10, 12}, 4},
	}

	for i, tt := range tests {
		r := countTriangles(tt.A)
		if r != tt.want {
			t.Errorf("Test %d: Want %d, got %d", i, tt.want, r)
		}
	}
}
