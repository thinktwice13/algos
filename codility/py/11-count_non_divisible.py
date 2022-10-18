# https://app.codility.com/programmers/lessons/11-sieve_of_eratosthenes/count_non_divisible/

def fn(a):
    # Find divisors of each number in a

    # Map counts of each number in a
    max_el = float('-inf')
    counts = {}
    for n in a:
        counts[n] = counts.get(n, 0) + 1
        max_el = max(max_el, n)

    sieve = [0] * (max_el + 1)
    # For each key in counts, find all divisors and add to sieve
    for n in counts:
        for step in range(n, max_el + 1, n):
            sieve[step] += counts[n]

    non_divisors = []
    for n in a:
        non_divisors.append(len(a) - sieve[n])

    return non_divisors


assert fn([3,1,2,3,6]) == [2,4,3,2,0]
