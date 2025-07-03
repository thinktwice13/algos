
def fn(A):
    left_vals, left_max = {}, 0
    right_vals, right_max = {}, 0
    mid = len(A) // 2
    for i in range(len(A)):
        ii = len(A) - i - 1
        l, r = A[i], A[ii]
        left_vals[l] = left_vals.get(l, 0) + 1
        left_max = max(left_max, left_vals[l])
        right_vals[r] = right_vals.get(r, 0) + 1
        right_max = max(right_max, right_vals[r])
        if left_max == right_max and left_max + right_max > len(A):
            return i

    return -1
