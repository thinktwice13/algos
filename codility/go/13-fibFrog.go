package golang

// https://app.codility.com/programmers/lessons/13-fibonacci_numbers/fib_frog/

func fibFrog(A []int) int {
	// Add one more position to A to act as a shore
	A = append(A, 1)
	N := len(A)
	// Get fibonacci numbers up to the shore distance and remove first value to remove duplicate 1 in 1,1,2,3,...
	distances := fibs(N)[1:]

	// reachable holds optimal jump counts at each position. 1 is best case scenario
	reachable := make([]int, N)
	// for now, only record the ones that can be reached from the starting shore in 1 jump
	for _, d := range distances {
		if A[d-1] == 1 {
			reachable[d-1] = 1
		}
	}

	// iterate all positions until reaching the other shore, find the lowest possible jump count for each
	for pos := range A {
		// Skip if no leaf here or we already know it can be reached in a single jump
		if A[pos] == 0 || reachable[pos] > 0 {
			continue
		}

		// assume worst case jump count to this position and adjust using previous position jumps
		// we can only jump to position if previousPosition+distance has a leaf
		jumps := pos + 1
		canJump := false
		for _, d := range distances {
			prevPos := pos - d
			// skip if oob or not reachable
			if prevPos < 0 || reachable[prevPos] == 0 {
				continue
			}

			// if jump count to prev position < worst case so far to this position, adjust
			if reachable[pos] > jumps {
				jumps = reachable[prevPos]
				canJump = true
			}
		}

		// if any jumps possible, adjust count in reachable
		if canJump {
			reachable[pos] = jumps + 1
		}
	}

	// zero is the default value at shore, which means we haven't found an option to jump there
	shore := reachable[len(reachable)-1]
	if shore == 0 {
		return -1
	}
	return shore
}

func fibs(n int) []int {
	nums := []int{1, 1}
	i := 2
	for i <= n {
		nums = append(nums, i)
		i = nums[len(nums)-1] + nums[len(nums)-2]
	}
	return nums
}
