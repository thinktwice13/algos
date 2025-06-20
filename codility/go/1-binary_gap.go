package codility

import (
	"strconv"
)

func binaryGap(n int64) int {
	// Convert to binary
	bin := strconv.FormatInt(n, 2)
	total, current := 0, 0
	for _, b := range bin {
		char := string(b)
		if char == "0" {
			current++
		} else {
		    total = max(total, current)
			current = 0
		}
	}

	return total
}
