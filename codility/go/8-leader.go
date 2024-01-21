package golang

// https://app.codility.com/programmers/lessons/8-leader/dominator/
func dominator(A []int) int {
	m := make(map[int]int, len(A))
	for i, a := range A {
		m[a]++
		if m[a] > len(A)/2 {
			return i
		}
	}

	return -1
}

// https://app.codility.com/programmers/lessons/8-leader/equi_leader/
// insight:
// for a leader to apply to both sides of the slice, it also has to be a leader in the entire, combined slice
// find it that way first, then move the index and count the indexes the leader applies for
func equiLeader(A []int) int {
	if len(A) < 2 {
		return 0
	}

	var leader int
	m := make(map[int]int, len(A))
	for _, a := range A {
		m[a]++
		if m[a] > len(A)/2 {
			leader = a
		}
	}
	// this check is here to confirm that leader is not zero only because of integer initialization, but true value found in A
	if _, ok := m[leader]; !ok {
		return 0
	}

	leftCount := 0
	rightCount := m[leader]
	leaderIndexes := 0
	// We don't need to check the last idx because there is never an equvalent leader on the right side (length zero)
	for i := 0; i < len(A)-1; i++ {
		leftLen := i + 1
		rightLen := len(A) - i - 1

		// if current idx is a leader, update counts
		if A[i] == leader {
			leftCount++
			rightCount--
		}

		// add to count if leader still applies both left and right
		if leftCount > leftLen/2 && rightCount > rightLen/2 {
			leaderIndexes++
		}
	}

	return leaderIndexes
}
