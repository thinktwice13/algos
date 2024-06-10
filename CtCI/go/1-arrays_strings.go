package ctci

func isUnique(s string) bool {
	if len(s) > 128 {
		return false
	}

	// create a boolean array to keep track of characters
	// if a character is already found, return false
	// otherwise, set the value to true
	var charSet [128]bool
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
	var checker int32
	for _, c := range s {
		val := 1 << (int32(c) - 'a')
		if (checker & (1 << val)) > 0 {
			return false
		}
		checker |= 1 << val
	}

	return true
}
