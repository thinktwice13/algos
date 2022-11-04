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

// In how many ways can a child run up a staircase of size n? Possible steps: 1, 2 or 3

const fn = n => {
	if (n < 0) return 0;
	if (n < 1) return 1;

	// Return sum of possible combinations O(3^n) // Hint CTCI puzzle with poison bottles: 1000 bottles on 10 test strips = 2^10
	return fn(n - 1) + fn(n - 2) + fn(n - 3);
}

const withMemo = (n, memo = []) => {
	if (n < 0) return 0;
	if (n < 1) return 1;

	if (!memo[n]) {
		memo[n] = withMemo(n - 1, memo) + withMemo(n - 2, memo) + withMemo(n - 3, memo);
	}

	return memo[n];
}

const rev = n => {
	if (n < 0) return 0;
	if (n == 0) return 1;

	let prev1 = 1
	let prev2 = 0
	let prev3 = 0

	for (let nn = 1; nn < n; nn++) {
		const next = prev1 + prev2 + prev3
		prev3 = prev2
		prev2 = prev1
		prev1 = next
	}

	return prev1 + prev2 + prev3
}

// Test
const n = 15
const res = rev(n)
console.log(res)

fn(4)