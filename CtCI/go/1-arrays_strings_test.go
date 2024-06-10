package ctci

import "testing"

func Test_isUnique2(t *testing.T) {
	tests := []struct {
		in   string
		want bool
	}{
		{"", true},
		{"a", true},
		{"zz", false},
		{"ab", true},
		{"abcdefghijklmnopqrstuvwxyz", true},
		{"abcdefghijklmnopqrstuvwxyza", false},
	}

	for _, tt := range tests {
		t.Run(tt.in, func(t *testing.T) {
			if got := isUnique2(tt.in); got != tt.want {
				t.Errorf("isUnique2(%q) = %v, want %v", tt.in, got, tt.want)
			}
		})
	}
}

func Test_isPermutation(t *testing.T) {
	tests := []struct {
		s1   string
		s2   string
		want bool
	}{
		{
			"abcd", "acbd", true,
		},
		{"acbd", "abc", false},
		{
			"", "", true,
		},
	}

	for _, tt := range tests {
		t.Run(tt.s1, func(t *testing.T) {
			if got := isPermutation(tt.s1, tt.s2); got != tt.want {
				t.Errorf("isUnique2(%q, %q) = %v, want %v", tt.s1, tt.s2, got, tt.want)
			}
		})
	}
}
