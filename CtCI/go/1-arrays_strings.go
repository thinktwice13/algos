package ctci

func isUnique(s string) bool {
	if len(s) > 128 {
		return false
	}

	// create a boolean array to keep track of characters
	// if a character is already found, return false
	// otherwise, set the value to true
	var charSet [256]bool // assuming extended ASCII
	for _, c := range s {
		if charSet[c] {
			return false
		}
		charSet[c] = true
	}
	return true
}

// isUnique assumes that the string only contains lowercase letters and uses bitwise operators
func isUnique2(s string) bool {
	if len(s) > 128 {
		return false
	}

	// checker is an integer that will be used to keep track of characters
	// if a character is already found, return false
	// otherwise, set the value to true
	var checker rune
	for _, c := range s {
		val := c - 'a'
		if (checker & (1 << val)) > 0 {
			return false
		}
		checker |= 1 << val
	}

	return true
}

func isPermutation(s1, s2 string) bool {
	counter := make(map[rune]int)
	for _, s := range s1 {
		if _, ok := counter[s]; !ok {
			counter[s] = 0
		}
		counter[s]++
	}

	for _, s := range s2 {
		if _, ok := counter[s]; !ok {
			return false
		}
		counter[s]--
		if counter[s] == 0 {
			delete(counter, s)
		}
	}

	return len(counter) == 0
}
