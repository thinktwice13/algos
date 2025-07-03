
def fn(A):
    res, fwd, bwd = 0, [0] * len(A), [0] * len(A)
    for i in range(1, len(A) - 1):
        ii = len(A) - i - 1
        # Sum up values from A from both sides. Keep above zero
        fwd[i] = max(0, fwd[i - 1] + A[i])
        bwd[ii] = max(0, bwd[ii + 1] + A[ii])
        # When i and ii overlap, choose position with best double sum
        if ii <= i:
            res = max(res, fwd[i-1]+bwd[i+1], fwd[ii-1]+bwd[ii+1])

    return res


assert fn([3, 2, 6, -1, 4, 5, -1, 2]) == 17
