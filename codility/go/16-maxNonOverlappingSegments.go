package codility

func maxNonOverlappingSegments(A, B []int) int {
	if len(A) == 0 {
		return 0
	}

	count := 1
	end := B[0]
	for i := 1; i < len(A); i++ {
		// update count of start of current segment is after last recorded segment end
		if A[i] > end {
			end = B[i]
			count++
		}
	}

	return count
}
