// Sieve of Eratosthenes: Find prime numbers up to  and including N
function sieve(N) {
  const sieve = new Array(n + 1).fill(true) // Include 0 for easier index matching
  sieve[0] = false // 0 is not a prime noumber by definition
  sieve[1] = false // 1 is not a prime noumber by definition
  let i = 2
  // We fo not need to mark multiples of i which are bigger than i * i because they will have been removed by one of the smaller prime divisors
  while (i * i <= N) {
    // If i is already marked, start from i * i and increase by i
    if (sieve[i]) {
      let k = i * i
      while (k <= N) {
        sieve[k] = false 
        k += i;
      }
    }
    i++;
  }

  return sieve
}

const n = 17
const r = sieve(n)


// Factorization
// It is a process of decomposing into prime factors: For every crossed nunber, remember the smallest prime that divides this number

// Prepare array for factorialisation using modified sieve of Eratosthenes
function factPrep(N) {
  const facts = new Array(N + 1).fill(0)
  i = 2
  while (i * i <= N) {
    if (!facts[i]) {
      let k = i * i
      while(k <= N) {
        if (!facts[k]) facts[k] = i
        k += i
      }
    }
    i++;
  }

  // N cannot have more than logN prime factors, because every prime factor is >= 2
  let n = N
  const primeFactors = []
  while (facts[n] > 0) {
    primeFactors.push(facts[n])
    primeFactors
    n /= facts[n]
  }
  primeFactors.push(n)
  return primeFactors
}


const factn = 20
const resn = factPrep(factn)