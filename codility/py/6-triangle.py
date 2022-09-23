# https://app.codility.com/programmers/lessons/6-sorting/triangle/


def fn(A):
    """
    We want three vals close together, where sum of any tw is bigger than the third one.
    """
    A.sort()
    for i in range(0, len(A) - 2):
        """
        Since we're not loking for a smallest triangle, just confirming any triangle, this condition is enough.
        All vals after current are bigger than current, so are their sums.
        """
        if A[i] + A[i + 1] > A[i + 2]:
            return 1

    return 0


assert fn([10, 2, 5, 1, 8, 20]) == 1
assert fn([10, 50, 5, 1]) == 0
assert fn([10, 50, 5, 1, 1]) == 1