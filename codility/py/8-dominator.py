
def fn(A):
    if len(A) == 0:
        return -1
    if len(A) == 1:
        return 0
    vals = {}
    mid = len(A) // 2
    for i in range(len(A)):
        v = A[i]
        if v in vals and vals[v]+1 > mid:
            return i
        vals[v] = vals.get(v, 0) + 1

    return -1


assert fn([3, 4, 3, 2, 3, -1, 3, 3]) in [0, 2, 4, 6, 7]
