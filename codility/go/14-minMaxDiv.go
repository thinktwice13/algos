package golang

func minMaxDiv(K, M int, A []int) int {
	// find minimum and maximum for worst case scenarios
	// min will be the max value from A when it's the only value in the block
	// max will be sum of all vals from A when all values are in the same block
	// improve from there
	min, max := 0, 0
	for _, a := range A {
		max += a
		if a > min {
			min = a
		}
	}

	bestGuess := max
	// narrow down guesses until best answer found, record best answer when max has to be adjusted
	for min <= max {
		guess := (min + max) / 2
		// check blocks
		if countBlocks(A, guess) > K {
			// too many blocks. get the min closer
			min = guess + 1
		} else {
			max = guess - 1
			if guess < bestGuess {
				bestGuess = guess
			}
		}
	}

	return bestGuess
}

// countBlocks splits A into blocks according to the guessed sum inside each block
func countBlocks(A []int, guess int) int {
	blocks := 1
	sum := 0
	for _, a := range A {
		sum += a
		// if > guess, use it as a new block
		if sum > guess {
			sum = a
			blocks++
		}
	}

	return blocks
}
