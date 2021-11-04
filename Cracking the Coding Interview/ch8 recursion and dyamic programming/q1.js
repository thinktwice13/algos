// Triple steps

/**
 * 
 * @param {number} n number of steps
 * @param memo memoized results
 */
function fn(n, memo = {}) {
	if (memo[n]) return memo[n]

	if (n < 0) return 0
	if (n === 0) return 1

	const res = fn(n - 1) + fn(n - 2) + fn(n - 3)
	memo[n] = res

	return res

}

fn(4)