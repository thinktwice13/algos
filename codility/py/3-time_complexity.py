import math


def frogJump(pos, target_pos, jump_distance):
    return math.ceil((target_pos - pos) / jump_distance)


assert frogJump(10, 85, 30) == 3
assert frogJump(10, 100, 30) == 3
assert frogJump(10, 100, 10) == 9


def missingElement(A):
    # XOR all elements with their expected positions
    res = 0
    for i in range(len(A)):
        res ^= i + 1
        res ^= A[i]

    # There is only one number missing (per task spec)
    # XOR result with replacement number (len(A)+1)
    return res ^ (len(A) + 1)


assert missingElement([2, 3, 1, 5]) == 4
assert missingElement([6, 1, 4, 2, 3]) == 5
assert missingElement([5, 2, 4, 3]) == 1
assert missingElement([4, 1, 2, 3]) == 5


def tapeEquilibrium(A):
    left, right = 0, sum(A)
    # best = right doesn't work for negative numbers
    best = float('inf')

    for p in range(1, len(A)):
        n = A[p - 1]
        left += n
        right -= n
        best = min(best, abs(left - right))

    return best


assert tapeEquilibrium([3, 1, 2, 4, 3]) == 1
assert tapeEquilibrium([1, 1]) == 0
assert tapeEquilibrium([-1000, 1000]) == 0
assert tapeEquilibrium([1000, -1000]) == 2000
assert tapeEquilibrium([-10, -20, -30, -40, 100]) == 0
