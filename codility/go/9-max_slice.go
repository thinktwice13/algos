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
