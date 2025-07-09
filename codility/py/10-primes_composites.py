# Count the number of divisors
def divisors(n):
    i, result = 1, 0
    # We only need to check up tp sqrt(n) because divisors come in pairs
    while i*i<n:
        if n%i==0:
            result+=2
        i+=1
    # The case where n is a perfect square, which does not have a paired divisor
    if i*i==n:
        result+=1
    return result

assert divisors(1) == 1
assert divisors(2) == 2
assert divisors(3) == 2
assert divisors(4) == 3
assert divisors(5) == 2
assert divisors(6) == 4
assert divisors(7) == 2
assert divisors(8) == 4
assert divisors(9) == 3
assert divisors(10) == 4
assert divisors(11) == 2
assert divisors(12) == 6
assert divisors(13) == 2
assert divisors(14) == 4
assert divisors(15) == 4
assert divisors(16) == 5

def is_prime(n):
    i = 2 # Numbers < 2 are not prime
    # Any number divisible by a number between 2 and n-1 is a composite, not prime
    while i*i<=n:
        if n%i==0:
            return False
        i+=1
    return True

"""
n coins are aligned in a row. Each coin is showing heads at the beginning.
Then, n people turn over corresponding coins as follows. Person i reverses coins with numbers
that are multiples of i. That is, person i flips coins i, 2· i, 3· i, . . . until no more appropriate
coins remain. The goal is to count the number of coins showing tails. 

Count number of coins showing tails at the end. 
"""
def coins(n):
    """
    Coin at each position will get flipped by each of its divisors.
    Only coins on positions with odd number of divisors end up as tails.
    Only perfect squares have odd number of divisors
    """
    return int(n**0.5)

assert coins(1) == 1
assert coins(2) == 1
assert coins(3) == 1
assert coins(4) == 2
assert coins(5) == 2
assert coins(6) == 2
assert coins(7) == 2
assert coins(8) == 2
assert coins(9) == 3
assert coins(10) == 3
assert coins(11) == 3
assert coins(12) == 3
assert coins(13) == 3
assert coins(14) == 3
assert coins(15) == 3
assert coins(16) == 4

def min_perimeter_rect(N):
    M = 1
    for i in range(1, int(N**0.5) + 1):
        if N % i == 0:
            M = i
    return 2 * (M + N // M)


assert min_perimeter_rect(12) == 14
assert min_perimeter_rect(25) == 20
assert min_perimeter_rect(13) == 28
assert min_perimeter_rect(16) == 16
