package golang

// tieRopes returns the maximum number of tied adjacent ropes for which length is <= K
func tieRopes(K int, A []int) int {
	if len(A) == 0 {
		return 0
	}
	var cnt int
	currSum := 0
	for _, a := range A {
		currSum += a
		if currSum >= K {
			cnt++
			currSum = 0
		}
	}

	return cnt
}
