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

def max_profit(A):
    if not A or len(A) < 2:
        return 0

    min_price, best_profit = A[0], 0
    for day in range(1,len(A)):
        price = A[day]
        best_profit = max(best_profit, price - min_price)
        min_price = min(min_price, price) # Update for future sells
    return best_profit

assert max_profit([23171, 21011, 21123, 21366, 21013, 21367]) == 356
assert max_profit([1, 2, 3, 4, 5]) == 4
assert max_profit([5, 4, 3, 2, 1]) == 0
assert max_profit([5, 1, 2, 3, 4]) == 3
assert max_profit([1, 2, 3, 2, 1]) == 2
assert max_profit([7, 1, 5, 3, 6, 4]) == 5
assert max_profit([7, 6, 4, 3, 1]) == 0

def max_slice_sum(A):
    if not A:
        return 0
    current = best = A[0]
    for i in range(1,len(A)):
        current = max(A[i],current+A[i])
        best = max(best,current)
    return best

assert max_slice_sum([3, 2, -6, 4, 0]) == 5
assert max_slice_sum([-2, -3, -1]) == -1
assert max_slice_sum([-2, -3, -1, 4]) == 4
assert max_slice_sum([1, 2, 3]) == 6
assert max_slice_sum([1, 2, -3]) == 3
