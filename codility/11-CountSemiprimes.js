function solution(N, P, Q) {
  // Record number of primes for each value 1...N
  const facts = {}
  const semis = { 0: 0, 1: 0 }
  let i = 2
  while (i <= N) {
    // Record first prime factors for all values
    if (!facts[i]) {
      let k = i * i
      while (k <= N) {
        if (!facts[k]) facts[k] = i
        k += i
      }
    }

    const div = i / facts[i]
    const isDivPrime = div > 0 && !facts[div] // If never recorded in a map, it is not a prime
    const prevSemis = semis[i - 1] || 0
    semis[i] = prevSemis + (isDivPrime ? 1 : 0)

    i++
  }

  return P.map((_, idx) => {
    return (semis[Q[idx]] || 0) - (semis[P[idx] - 1] || 0) // Semis on P[idx] inclusive ( add  - 1 )
  })
}

// TEST
const p = [1, 4, 16]
const q = [26, 10, 20]
const n = Math.max(...q)
const f = solution(n, p, q)