// Prepare the array (like sieve of Eratosthenes)

const prep = (n) => {
  const factors = Array(n + 1).fill(0);
  let i = 2; // 1 cannot be a prime factor
  while (i ** 2 <= n) {
    if (factors[i] === 0) {
      let k = i ** 2;
      while (k <= n) {
        if (factors[k] === 0) {
          factors[k] = i;
        }
        k += i;
      }
    }
    i++;
  }

  return factors;
};

const factors = (n) => {
  const factors = prep(n);
  const primes = [];

  while (factors[n] > 0) {
    primes.push(factors[n]);
    n = n / factors[n];
  }
  primes.push(n);

  return primes;
};

const f = factors(20);
console.log(f);
