package sorting

// selection finds the minimum element from the unsorted part and swaps it with the first unsorted element
func selection(arr []int) []int {
	n := len(arr)
	for i := 0; i < n-1; i++ {
		// set minIdx to the first unsorted element
		minIdx := i
		for j := i + 1; j < n; j++ {
			if arr[j] < arr[minIdx] {
				minIdx = j
			}
		}

		// swap with first unsorted element
		arr[i], arr[minIdx] = arr[minIdx], arr[i]
	}
	return arr
}
