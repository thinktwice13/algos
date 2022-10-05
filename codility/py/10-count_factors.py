# https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/count_factors/

def fn(n):
    factors, factor = 0, 1
    while factor * factor <= n:
        # Add 2 if divisor
        # Add 1 if a divisor and equal to sqrt of n (bc there is no pair)
        if n % factor == 0:
            factors += 1 if n / factor == factor else 2
        factor += 1
    return factors


def test_fn():
    t = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 15, 16, 18, 20, 24]
    e = [1, 2, 2, 3, 2, 4, 2, 4, 3, 4, 6, 2, 4, 5, 6, 6, 8]
    for i in range(len(t)):
        res = fn(t[i]) == e[i]
        if res is False:
            print("For %d expected %d got %d" % (t[i], e[i], fn(t[i])))
            raise AssertionError


test_fn()