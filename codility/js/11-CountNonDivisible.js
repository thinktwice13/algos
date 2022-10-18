function solution(A) {
  const N = A.length

  // Make has of distinct elements and record their counts
  let maxElement= -Infinity
  const counts = {}
  for(let el of A) {
    if (!counts[el]) counts[el] = 1
    else counts[el]++;

    if (el > maxElement) maxElement = el
  }
  
  // Calc SoE
  const sieve = {}
  // Each element is a divisor for all of its multiples. 
  // On the sieve, mark each multiple with the element count found in hash. The sum will be the count of all divisors for the element on idx
  for (let element in counts) { // Counts object will be iterated as if sorted 1...max
    const el = +element // coerce hash key to number
    const count = counts[el]
    for (let step = el; step <= maxElement; step += el) {
      if (!sieve[step]) sieve[step] = count
      else sieve[step] += count
    }
  }

  // Map each element of A and find total number of non-divisors
  return A.map(el => {
    const divisorsCount = sieve[el]
    const nonDivisors = A.length - divisorsCount
    return nonDivisors
  })
}

// TEST
// const arr = [20,3,6,35,2,37,18,6]
const arr = [2,20,3,6,24,3]
const res = solution(arr)