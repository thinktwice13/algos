def example(A):
    current = best = 0
    for a in A:
        current = max(0,current+a) # If the sum is negative, reset to zero instead
        best = max(current, best)
    return best


assert example([3, 2, -6, 4, 0]) == 5
assert example([-2, -3, -1]) == 0
assert example([-2, -3, -1, 4]) == 4
assert example([1, 2, 3]) == 6
assert example([1, 2, -3]) == 3