# https://app.codility.com/programmers/lessons/3-time_complexity/


def fn(A):
    sum_total = sum(A)
    sum_left, sum_right, min_diff = 0, sum_total, abs(sum_total)

    for i in range(1, len(A)):
        el = A[i]
        sum_right -= el
        sum_left += el
        diff = abs(sum_left - sum_right)
        if diff < min_diff:
            min_diff = diff

    return min_diff


assert fn([3, 1, 2, 4, 3]) == 1
assert fn([1, 1]) == 0
assert fn([-1000, 1000]) == 0
