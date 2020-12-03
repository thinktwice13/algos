

module.exports =  n => {
  // Only check up to teh sqrt
  // If n is divisible by a number greater than its sqrt, then it is also divisible by a nuber smaller than it.
  // Example: 33 / 11, 33 / 3
  for (let i = 2; x <= Math.sqrt(n); i++) {
    if (n % i === 0) return false
  }
  return true
}

// O(sqrt(n))