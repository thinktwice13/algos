package golang

// FIXME: Solution: 25%

import (
	"sort"
)

func nailingPlanks(A, B, C []int) int {
	// Sort so we could run binary search when nailing and removing planks
	sort.Slice(A, func(i, ii int) bool {
		less := A[i] < A[ii]
		if less {
			B[i], B[ii] = B[ii], B[i]
		}
		return less
	})

	// Use all nails from C in sequence. Return as soon as all planks nailed
	for i, nail := range C {
		// Remove all planks that can be nailed with this nail
		low := 0
		high := len(A) - 1
		for low <= high && len(A) > 0 {
			// Remove all planks with nail
			mid := (low + high) / 2
			if nail < A[mid] {
				// This nail hits too low. Move high bound
				high = mid - 1
			} else if nail > B[mid] {
				// Nail hits to high. Move low boundary
				low = mid + 1
			} else {
				// Nailed it. Remove plank
				A = append(A[:mid], A[mid+1:]...)
				B = append(B[:mid], B[mid+1:]...)
				// If none left, we're done
				if len(A) == 0 {
					return i + 1
				}
			}
		}
	}

	return -1
}
