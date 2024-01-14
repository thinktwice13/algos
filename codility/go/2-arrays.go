package golang

// https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/
func cyclicRotation(list []int, k int) []int {
	l := len(list)
	if l == 0 {
		return list
	}

	// reduce k by using modulo
	// rotated list will then start at k
	k = k % l
	if k == 0 {
		return list
	}

	// create a new list with the same length as the original
	// use offset to rotate in the right direction
	offset := l - k
	return append(list[offset:], list[:offset]...)
}

// https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/
func oddOccurrencesInArray(list []int) int {
	// XOR here works because pairs of numbers will cancel each other out
	// it only works if there is an odd number of elements and there is only one element that is not paired
	// in this task, we are guaranteed those conditions
	num := 0
	for _, n := range list {
		num ^= n
	}
	return num
}
