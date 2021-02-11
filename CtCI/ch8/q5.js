// Find product of 2 numbers without using * or /

const getProduct = (a,b) => {
  // Find smaller
  const smaller = a < b ? a : b;
  const bigger = a < b ? b : a;

  return calc(smaller, bigger)
}

// Half the smaller number by shifting bits until it reaches base case
const calc = (s,b, memo = {}) => {
  // base cases
  if (s === 0) return 0;
  if (s === 1) return b;
  
  // Use memo
  if (memo[s]) return memo[s]

  // Calculate half
  const half = s >> 1 // Will only return even numbers
  const halfValue = calc(half, b, memo);
  // Cache
  memo[half] = halfValue;

  // Add one more b in case s was odd
  return halfValue + halfValue + (s%2 === 0 ? 0 : b);
}

// TEST
const x = getProduct(3,5)
x