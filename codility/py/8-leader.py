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