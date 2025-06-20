
def divisors(n):
    """Return the number of divisors of n"""
    i, divs = 1, 0
    while i ** 2 < n:
        if n % i == 0:
            divs += 2
        i += 1
    if i ** 2 == n:
        divs += 1
    return divs


assert divisors(24) == 8
assert divisors(1) == 1
assert divisors(2) == 2
assert divisors(3) == 2


def is_prime(n):
    """Return True if n is prime"""
    if n == 1:
        return False
    i = 2
    while i ** 2 <= n:
        if n % i == 0:
            return False  # It is a composite number
        i += 1
    return True


def test_is_prime():
    test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    exp = [False, True, True, False, True, False, True, False, False, False, True, False, True, False, False, False]
    for i in range(len(test)):
        assert is_prime(test[i]) == exp[i]


test_is_prime()


def flip_coins(n):
    res = 0
    coins = [1] * (n + 1)  # Start with zero (heads up)
    for person in range(1, n + 1):
        c = person
        while c <= n:
            coins[c] *= -1  # Flip coin to heads or tails
            c += person
        res -= min(0, coins[person])  # Add coins that are heads up
    return res


assert flip_coins(5) == 2
assert flip_coins(10) == 3
assert flip_coins(100) == 10
assert flip_coins(1000) == 31
assert flip_coins(20) == 4
assert flip_coins(49) == 7
assert flip_coins(50) == 7
assert flip_coins(48) == 6
# Tails up count is a floored sqrt of n

