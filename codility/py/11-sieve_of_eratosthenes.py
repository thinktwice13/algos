# https://codility.com/media/train/9-Sieve.pdf

def sieve(n):
    sieve = [True] * (n + 1)
    sieve[0] = sieve[1] = False  # 0 and 1 are not primes
    i = 2  # Start with 2
    while i * i <= n:
        # If i is prime, mark multiples of i as non-prime
        if sieve[i]:
            # Cross out multiples of i
            k = i * i
            while k <= n:
                sieve[k] = False
                k += i
        i += 1

    return sieve


# Record the smallest prime factor of each number and use it to decompose the number n
def factorize(n):
    # O(log logn)
    factors = [0] * (n + 1)
    i = 2
    while i * i <= n:
        if factors[i] == 0:
            k = i * i
            while k <= n:
                if factors[k] == 0:
                    factors[k] = i
                k += i
        i += 1

    # O(logn)
    prime_factors = []
    # Reduce n while looking for its prime factors in factors array
    while factors[n] > 0:
        prime_factors.append(factors[n])
        n //= factors[n]  # //= to make it an integer bc it is used as a list index

    # Append the smallest iteration of n as a prime factor
    prime_factors.append(n)
    return prime_factors


assert factorize(20) == [2,2,5]
