package codility

import "testing"

func Test_fish(t *testing.T) {
	tests := []struct {
		sizes      []int
		directions []int
		expAlive   int
	}{
		{[]int{0, 1}, []int{1, 1}, 2},
	}

	for i, tt := range tests {
		if fish(tt.sizes, tt.directions) != tt.expAlive {
			t.Errorf("Test %d: Expected %d", i, tt.expAlive)
		}
	}
}

func Test_stoneWall(t *testing.T) {
	tests := []struct {
		in  []int
		exp int
	}{
		{[]int{8, 8, 5, 7, 9, 8, 7, 4, 8}, 7},
	}

	for i, tt := range tests {
		if stoneWall(tt.in) != tt.exp {
			t.Errorf("Test %d: Expected %d", i, tt.exp)
		}
	}
}
