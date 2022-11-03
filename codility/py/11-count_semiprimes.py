# https://app.codility.com/programmers/lessons/11-sieve_of_eratosthenes/count_semiprimes/
# A semiprime is a natural number that is the product of two (not necessarily distinct) prime numbers. The first few semiprimes are 4, 6, 9, 10, 14, 15, 21, 22, 25, 26.


def solution(N, P, Q):
    # Find smallest factors for 1...N. Used to determine semiprimes
    factors = [0] * (N + 1)

    # Keep track of total semiprimes found
    # Record the count for each number from Q and P(-1)
    semi_count = 0  # Keep track of total semis found
    endpoints = {}
    for p, q in zip(P, Q):
        endpoints[p - 1] = 0
        endpoints[q] = 0

    for n in range(2, N + 1):
        # Record smallest factors
        if factors[n] == 0:
            k = n * n
            while k < len(factors):
                if factors[k] == 0:
                    factors[k] = n
                k += n

        # Update total semis count
        semi_count += 1 if factors[n] != 0 and factors[n // factors[n]] == 0 else 0

        # If n is also an endpoint from P and Q, record the current count
        if n in endpoints:
            endpoints[n] = semi_count

    return [endpoints[q] - endpoints.get(p - 1, 0) for p, q in zip(P, Q)]


assert solution(26, [1, 4, 16], [26, 10, 20]) == [10, 4, 0]
