package golang

import "math/big"

// https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/peaks/
func peaks(A []int) int {
	// No peaks can be found in < 3 length
	if len(A) < 3 {
		return 0
	}

	// Find all peak indexes
	var peaks []int
	for i := 1; i < len(A)-1; i++ {
		// Not a peak if any of the adjacent positions are higher
		if A[i-1] >= A[i] || A[i+1] >= A[i] {
			continue
		}
		peaks = append(peaks, i)
	}

	// If no peaks found, no blocks possible. If 1 peak found, only one block possible.
	if len(peaks) < 2 {
		return len(peaks)
	}

	// If length of A is a prime number, there can only be one block
	if big.NewInt(int64(len(A))).ProbablyPrime(0) {
		return 1
	}

	// Max possible number of blocks is equal to number of peaks
	// Attempt to divide A in as many blocks as possible, high to low
	// At most, there can be twice as many blocks than peaks
	for i := len(peaks); i > 1; i-- {
		// Can A be divided into this number of blocks?
		if len(A)%i != 0 {
			continue
		}

		if canDivide(A, peaks, i) {
			return i
		}
	}

	return 0
}

func canDivide(A, peaks []int, blocks int) bool {
	// This peaks slice is a copy. For each block, remove all peaks that would be found in it.
	// Exit early if no peaks found in any of the blocks
	blockSize := len(A) / blocks
	blockStart := 0
	for blocks > 0 {
		// Early skip if peaks left < blocks left
		if len(peaks) < blocks {
			return false
		}
		nextStart := blockStart + blockSize
		// Fail if next peak is not in this block
		if peaks[0] >= nextStart {
			return false
		}

		// At least one peaks fits in block. Remove all matching peaks and adjust for next block
		for len(peaks) > 0 && peaks[0] < nextStart {
			peaks = peaks[1:]
		}
		blockStart += blockSize
		blocks--
	}

	return true
}
