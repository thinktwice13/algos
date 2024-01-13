package CtTI

import "testing"

func Test_pokerchips(t *testing.T) {
	tests := []struct {
		req int
		exp int
	}{
		{req: 100, exp: 1},
		{req: 50, exp: 1},
		{req: 25, exp: 1},
		{req: 10, exp: 1},
		{req: 5, exp: 1},
		{req: 1, exp: 1},
		{req: 101, exp: 2},
		{req: 51, exp: 2},
		{req: 26, exp: 2},
		{req: 11, exp: 2},
		{req: 6, exp: 2},
		{req: 2, exp: 2},
		{req: 102, exp: 3},
		{req: 52, exp: 3},
		{req: 27, exp: 3},
		{req: 12, exp: 3},
		{req: 7, exp: 3},
		{req: 3, exp: 3},
		{req: 103, exp: 4},
		{req: 53, exp: 4},
		{req: 28, exp: 4},
		{req: 13, exp: 4},
		{req: 8, exp: 4},
		{req: 4, exp: 4},
		{req: 104, exp: 5},
		{req: 54, exp: 5},
		{req: 29, exp: 5},
		{req: 14, exp: 5},
		{req: 9, exp: 5},
		{req: 5, exp: 1},
		{req: 105, exp: 2},
		{req: 55, exp: 2},
		{req: 30, exp: 2},
		{req: 126, exp: 3},
		{req: 0, exp: 0},
	}

	for _, tt := range tests {
		res := pokerchips(tt.req)
		if res != tt.exp {
			t.Errorf("Expected %d, got %d", tt.exp, res)
		}
	}
}

func Test_wedding(t *testing.T) {
	tests := []struct {
		him   []int
		her   []int
		equal bool
	}{
		{him: []int{1, 2, 3}, her: []int{1, 2}, equal: false},
		{him: []int{1, 2, 3}, her: []int{2, 3, 4}, equal: false},
		{him: []int{1, 2, 3}, her: []int{4, 1, 2}, equal: false},
		{him: []int{1, 2, 3}, her: []int{1, 2, 3}, equal: true},
	}

	for _, tt := range tests {
		res := wedding(tt.him, tt.her)
		if res != tt.equal {
			t.Errorf("Expected %t, got %t", tt.equal, res)
		}
	}
}

func Test_duplicateChar(t *testing.T) {
	tests := []struct {
		s   string
		exp string
	}{
		{"", ""},
		{"a", "a"},
		{"aa", "a"},
		{"ab", "a"},
		{"aba", "a"},
		{"abab", "a"},
		{"ababc", "a"},
		{"ababca", "a"},
		{"ababcaa", "a"},
	}

	for _, tt := range tests {
		res := duplicateChar(tt.s)
		if res != tt.exp {
			t.Errorf("Expected %s, got %s", tt.exp, res)
		}
	}
}

func Test_brackets(t *testing.T) {
	tests := []struct {
		s   string
		exp bool
	}{
		{"", true},
		{"()", true},
		{"(())", true},
		{"(()())", true},
		{"(()())()", true},
		{"(()())())", false},
		{"[2*(3+1)]*{4}", true},
		{"[2*(3+1)]*{4", false},
		{"[2*(3+1)]*{4}}", false},
		{"[2*(3+1)]*{4}}}", false},
		{"[2*(3+1)]*{4}}}}", false},
		{"[2*(3+1)]*{4}}}}}", false},
	}

	for _, tt := range tests {
		res := brackets(tt.s)
		if res != tt.exp {
			t.Errorf("Expected %t, got %t", tt.exp, res)
		}
	}
}
