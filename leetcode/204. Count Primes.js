// https://leetcode.com/problems/count-primes/

/**
 * @param {number} n
 * @return {number}
 */
 var countPrimes = function(n) {
  let nums = Array(n)
  let count = 0
  for (let i = 2; i < n; i++) {
      if (!nums[i]) {
      count++
        for (let ii = i*i; ii < n; ii += i) nums[ii] = true
      }
  }

  return count
};

countPrimes(5000000)

// 349513