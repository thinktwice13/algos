def frog_river_one(X, A):
    """
    Given a river with X leaves, and an array A representing the leaves falling at each second,
    return the earliest time when the frog can cross the river.
    If it is not possible to cross, return -1.
    """
    leaves = set()
    for sec, pos in enumerate(A):
        leaves.add(pos)
        if len(leaves) == X:
            return sec
    return -1

assert frog_river_one(5, [1, 3, 1, 4, 2, 3, 5, 4]) == 6
assert frog_river_one(5, [1, 3, 1, 4, 2, 3]) == -1
assert frog_river_one(5, [1, 2, 3, 4, 5]) == 4


def perm_check(A):
    A.sort()
    for i in range(len(A)):
        if A[i] != i+1:
            return 0
    return 1

assert perm_check([4, 1, 3, 2]) == 1
assert perm_check([4, 1, 3]) == 0
assert perm_check([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) == 1

