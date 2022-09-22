def fn(A):
    # XOR all elements with their expected positions
    res = 0
    for i in range(len(A)):
        res ^= i+1
        res ^= A[i]

    # There is only one number missing (per task spec)
    # XOR result with replacement number (len(A)+1)
    return res ^ (len(A) + 1)


assert fn([2, 3, 1, 5]) == 4
assert fn([6, 1, 4, 2, 3]) == 5
assert fn([5, 2, 4, 3]) == 1
assert fn([4, 1, 2, 3]) == 5
