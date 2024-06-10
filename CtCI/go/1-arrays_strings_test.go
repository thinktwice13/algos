package ctci

import "testing"

func Test_isUnique2(t *testing.T) {
	tests := []struct {
		in   string
		want bool
	}{
		{"", true},
		{"a", true},
		{"cc", false},
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
