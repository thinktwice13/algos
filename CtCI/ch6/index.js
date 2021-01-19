// Generate a list of prime numbers yo to n
// Sieve of Eratosthenes

const SoE = n => {
  const flags = new Array(n).fill(true)
  let count = 0
  
  // Start with two
  let prime = 2
  while (prime <= Math.sqrt(n)) {
    // Mark multiples of prime and get next prime
    
    // Start with prime*prime because all smaller number will have been marked by previous prime
    for (let i = prime*prime; i < flags.length; i += prime) {
      flags[i] = false;
    }

    // Keep searching for next true flag
    prime++;
    while (prime < flags.length && !flags[prime]) {
      prime++;
    }
  }

  return flags;
}

console.log(SoE(100));

