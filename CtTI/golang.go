package CtTI

import "sort"

var sizes = []int{100, 50, 25, 10, 5, 1}

// what is the minimum number of chips needed to satisfy the request?
func pokerchips(requested int) int {
	// reduce requested amount in chunks of sizes, going from largest to smallest
	chips := 0
	for requested > 0 {
		for _, size := range sizes {
			if requested < size {
				continue
			}
			chips += requested / size
			requested = requested % size
		}
	}

	return chips
}

// same lists?
func wedding(him, her []int) bool {
	if len(him) != len(her) {
		return false
	}

	sort.Slice(him, func(i, j int) bool {
		return him[i] < him[j]
	})

	sort.Slice(her, func(i, j int) bool {
		return her[i] < her[j]
	})

	for i := range him {
		if him[i] != her[i] {
			return false
		}
	}

	return true
}

// duplicateChar find the most duplicated character in a string
func duplicateChar(s string) string {
	if len(s) == 0 {
		return ""
	}

	if len(s) == 1 {
		return s
	}

	// map all chars and remember the highest count
	highestCnt := 0
	highestChar := ""
	m := make(map[string]int)
	for _, c := range s {
		char := string(c)
		m[char]++

		// always found
		cnt, _ := m[char]

		// if more than half of the input string is this char, no need to lok further
		if cnt >= len(s)/2 {
			return char
		}

		// remember the highest
		if cnt > highestCnt {
			highestCnt = cnt
			highestChar = char
		}
	}

	return highestChar
}

// confirm matching brackets are placed correctly, Consider (,{,[ as valid
func brackets(s string) bool {
	// solve by maintaining counts of currently open brackets for each type separately

	m := map[string]int{
		"(": 0,
		"{": 0,
		"[": 0,
	}

	for _, c := range s {
		char := string(c)
		switch char {
		case "(":
			m["("]++
		case ")":
			m["("]--
		case "{":
			m["{"]++
		case "}":
			m["{"]--
		case "[":
			m["["]++
		case "]":
			m["["]--
		default:
			// ignore
		}
	}

	// if any of the counts is not 0, then there is a mismatch
	for _, v := range m {
		if v != 0 {
			return false
		}
	}

	return true
}
