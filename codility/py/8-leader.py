def dominator(A):
    d = {}
    for i, el in enumerate(A):
        if el in d:
            d[el] += 1
        else:
            d[el] = 1

        if d[el] > len(A) // 2:
            return i

    return -1

assert dominator([3, 4, 3, 2, 3, -1, 3, 3]) == 7
assert dominator([1, 2, 3, 4, 5]) == -1
assert dominator([1, 2, 3, 4, 5, 5, 5]) == -1
assert dominator([1, 2, 3, 4, 5, 5, 5, 5,5]) == 8

def equi_leader(A):
    # Find dominator - equileader will be the same value
    N = len(A)
    freq = {}
    for n in A:
        freq[n] = freq.get(n,0)+1
    dominator, dominator_count = None,0
    for k,v in freq.items():
        if v > N//2:
            dominator = k
            dominator_count = v

    if dominator is None:
        return 0

    # Count equi leaders. Start from left
    left_count, result = 0,0
    for i in range(N-1):
        n = A[i]
        if n == dominator:
            left_count += 1

        left_len = i+1
        right_len = N - 1 - i
        right_count = dominator_count - left_count

        # Verfify leader dominates both sides
        if left_count > left_len//2 and right_count>right_len//2:
            result +=1

    return result