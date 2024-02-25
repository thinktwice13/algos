package golang

// https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_profit/
func maxProfit(A []int) int {
	if len(A) == 0 {
		return 0
	}
	if len(A) == 1 {
		return 0
	}
	if len(A) == 2 {
		if A[1] > A[0] {
			return A[1] - A[0]
		}
		return 0
	}
	profit, buy, sell := 0, A[0], A[0]
	for day := 1; day < len(A); day++ {
		price := A[day]
		// if price lower than buy price, set both buy and sell price to this day
		// if price higher than sell price, set sell price to today
		// what is the potential profit? update if higher than best so far
		if price < buy {
			buy = price
			sell = price
			continue
		}

		if price > sell {
			sell = price

			if sell-buy > profit {
				profit = sell - buy
			}
		}
	}

	return profit
}

// https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_slice_sum/
func maxSliceSum(A []int) int {
	if len(A) == 0 {
		return 0
	}
	maxSum, currentSum := A[0], A[0]
	for i := 1; i < len(A); i++ {
		currentSum += A[i]
		if A[i] > currentSum {
			currentSum = A[i]
		}
		if currentSum > maxSum {
			maxSum = currentSum
		}
	}

	return maxSum
}

// https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_double_slice_sum/
func maxDoubleSliceSum(A []int) int {
	// leftToRight, rightToLeft slices
	// save slice sum at each position
	ltr, rtl := make([]int, len(A)), make([]int, len(A))
	for i := 1; i < len(A)-1; i++ {
		// ltr
		// add current value to previous value, or reset to zero
		ltr[i] = ltr[i-1] + A[i]
		if ltr[i] < 0 {
			ltr[i] = 0
		}

		// rtl
		// ii mirrors i
		ii := len(A) - 1 - i
		rtl[ii] = rtl[ii+1] + A[ii]
		if rtl[ii] < 0 {
			rtl[ii] = 0
		}

		// [MOVED for clarity] When half of the slice passed, check for best total sum
		//if i >= len(A)/2 {
		//	// ltr and rtl for both sides of i
		//	candidate := ltr[i-1] + rtl[i+1]
		//	if candidate > best {
		//		best = candidate
		//	}
		//
		//	// ltr and rtl for both sides of ii
		//	candidate = ltr[ii+1] + rtl[ii-1]
		//	if candidate > best {
		//		best = candidate
		//	}
		//}
	}

	// run through indexes again, for each, check both slices for best sum
	// this could also be done in the initial loop after i has passed half of the values
	var maxSum int
	for i := 1; i < len(A)-1; i++ {
		candidate := ltr[i-1] + rtl[i+1]
		if candidate > maxSum {
			maxSum = candidate
		}
	}

	return maxSum
}
