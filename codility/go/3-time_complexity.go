package golang

func frogJmp(x int, y int, d int) int {
	dist := y - x
	if dist%d == 0 {
		return dist / d
	} else {
		return dist/d + 1
	}
}

func permMissingElem(list []int) int {
	l := len(list)
	// use Gauss's formula to calculate the sum of the first n positive integers
	// then subtract the sum of the list to get the missing number
	return (l+1)*(l+2)/2 - sum(list)
}

func sum(list []int) int {
	total := 0
	for _, n := range list {
		total += n
	}
	return total
}

func permMissingElem2(list []int) int {
	l := len(list)
	// use XOR to find the missing number
	// XOR will cancel out pairs of numbers, when using index + 1 as the other number in a pair
	// the missing number will be left over
	// the array does not need to be sorted, but this only works if there is only one missing number
	num := 0
	for i := 0; i < l; i++ {
		num ^= list[i] ^ (i + 1)
	}
	return num ^ (l + 1)
}

func tapeEquilibrium(list []int) int {
	left := list[0]
	right := list[1]
	for i := 2; i < len(list); i++ {
		right += list[i]
	}
	best := right - left
	if best < 0 {
		best = -best
	}
	for i := 1; i < len(list)-1; i++ {
		left += list[i]
		right -= list[i]
		diff := right - left
		if diff < 0 {
			diff = -diff
		}
		if diff < best {
			best = diff
		}
	}

	return best
}
