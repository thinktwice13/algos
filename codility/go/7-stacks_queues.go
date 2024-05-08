package golang

func brackets(S string) int {
	if len(S) == 0 {
		return 1
	}

	brackets := make([]string, 0, len(S))
	for _, char := range S {
		b := string(char)
		if b == "(" || b == "[" || b == "{" {
			// we can always push opening brackets
			brackets = append(brackets, b)
			continue
		}

		// it's a closing bracket. check if last opening bracket is the same type
		if len(brackets) == 0 {
			return 0
		}

		last := brackets[len(brackets)-1]
		if (b == ")" && last == "(") || (b == "]" && last == "[") || (b == "}" && last == "{") {
			brackets = brackets[:len(brackets)-1]
			continue
		}

		// closing bracket doesn't match last opening bracket
		return 0
	}

	if len(brackets) > 0 {
		return 0
	}

	return 1
}

func fish(A []int, B []int) int {
	// stack the fish going downstream and have them eat smaller fish going upstream as they pass,
	// or get eaten by bigger fish going downstream
	// count the fish that survive
	var downstream []int
	var alive int
	for i := 0; i < len(A); i++ {
		// if going downstream, just add to the stack
		if B[i] == 1 {
			downstream = append(downstream, A[i])
			continue
		}

		// going upstream. eat all smaller downstream fish
		for len(downstream) > 0 {
			if A[i] > downstream[len(downstream)-1] {
				downstream = downstream[:len(downstream)-1]
				continue
			}

			// last downstream fish is bigger
			break
		}

		// if there are no downstream fish left, the upstream fish survives
		if len(downstream) == 0 {
			alive++
		}
	}

	return alive + len(downstream)
}

func nesting(S string) int {
	open := make([]string, 0, len(S)/2+1)
	for _, char := range S {
		s := string(char)
		if s == "(" {
			open = append(open, s)
			continue
		}
		// char is ")"
		if len(open) == 0 {
			return 0
		}
		if open[len(open)-1] != "(" {
			return 0
		}
		open = open[:len(open)-1]
	}

	if len(open) == 0 {
		return 1
	}

	return 0
}

func stoneWall(H []int) int {
	var wall []int
	var count int
	for _, h := range H {
		// remove all higher previous stones, going backwards, then count next stone if wall is empty or last stone is lower
		for ii := len(wall) - 1; ii >= 0; ii-- {
			if wall[ii] < h {
				break
			}
			if wall[ii] > h {
				wall = wall[:ii]
			}
		}

		if len(wall) == 0 || wall[len(wall)-1] < h {
			wall = append(wall, h)
			count++
		}
	}

	return count
}
