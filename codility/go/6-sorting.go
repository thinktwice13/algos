package golang

import "sort"

func distinct(A []int) int {
	// track number of distinct values in a map
	distinct := make(map[int]struct{})
	for _, num := range A {
		distinct[num] = struct{}{}
	}
	return len(distinct)
}

func maxProductOfThree(A []int) int {
	// largest product of three numbers will always be either:
	// product of three largest numbers (if all positive)
	// product of two smallest numbers and largest number (if two largest numbers are negative)
	sort.Ints(A)
	return max(A[0]*A[1]*A[len(A)-1], A[len(A)-1]*A[len(A)-2]*A[len(A)-3])
}

func triangle(A []int) int {
	// sort the array
	sort.Ints(A)
	// for each value, check if the next two values sum to more than the current value
	for i := 0; i < len(A)-2; i++ {
		if A[i]+A[i+1] > A[i+2] {
			return 1
		}
	}
	return 0
}

func numberOfDiscIntersections(A []int) int {
	counts := make(map[int]*struct{ open, closed int })
	for i, radius := range A {
		if _, ok := counts[i-radius]; !ok {
			counts[i-radius] = &struct{ open, closed int }{}
		}
		counts[i-radius].open++
		if _, ok := counts[i+radius]; !ok {
			counts[i+radius] = &struct{ open, closed int }{}
		}
		counts[i+radius].closed++
	}

	// sort the counts by their pos
	positions := make([]int, 0, len(counts))
	for index := range counts {
		positions = append(positions, index)
	}
	sort.Ints(positions)

	// for each position, check if the number of open discs is greater than the number of closed discs
	open := 0
	intersections := 0
	for _, pos := range positions {
		// open all discs are this position and add them to the number of intersections
		for counts[pos].open > 0 {
			intersections += open
			if intersections > 10000000 {
				return -1
			}
			counts[pos].open--
			open++
		}

		// close all discs at this position
		open -= counts[pos].closed
	}

	return intersections
}
