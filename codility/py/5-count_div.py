
import math


def fn(A, B, K):
    return math.floor(B / K) - math.ceil(A / K) + 1


assert fn(5, 11, 2) == 3
assert fn(6, 11, 2) == 3
assert fn(6, 12, 2) == 4
assert fn(5, 12, 2) == 4
