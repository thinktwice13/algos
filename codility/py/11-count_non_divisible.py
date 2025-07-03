
def fn(a):
    # Map counts of each number in a
    max_el = -1  # oob initial elemtn
    counts = {}  # dict of counts of each element
    for n in a:
        counts[n] = counts.get(n, 0) + 1
        max_el = max(max_el, n)


    # For each key in counts, find all divisors between itself and max_el+1.
    # Add to corresponding count in sieve
    sieve = [0] * (max_el + 1)
    for n in counts:
        for step in range(n, max_el + 1, n):
            sieve[step] += counts[n]

    # Subtract each count from len(a) to get non-divisors
    return [len(a) - sieve[n] for n in a]


assert fn([3, 1, 2, 3, 6]) == [2, 4, 3, 2, 0]


