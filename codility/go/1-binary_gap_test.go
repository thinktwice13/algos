package codility

import (
	"testing"
)

func TestBinGap(t *testing.T) {
	if binaryGap(72) != 2 {
		t.Fatal("expected 2 but got ", binaryGap(72))
	}
}
