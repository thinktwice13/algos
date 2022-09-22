# https://app.codility.com/programmers/lessons/2-arrays/cyclic_rotation/

def fn(A, K):
    if len(A) == 0:
        return A

    # No need to rotate full cycle.
    K = K % len(A)
    return A[-K:] + A[:-K]


assert fn([3, 8, 9, 7, 6], 3) == [9, 7, 6, 3, 8]
assert fn([0, 0, 0], 1) == [0, 0, 0]
assert fn([1, 2, 3, 4], 4) == [1, 2, 3, 4]