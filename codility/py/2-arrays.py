def cyclic(A, K):
    if len(A) == 0:
        return A

    # No need to rotate full cycle.
    K = K % len(A)
    return A[-K:] + A[:-K]


assert cyclic([3, 8, 9, 7, 6], 3) == [9, 7, 6, 3, 8]
assert cyclic([0, 0, 0], 1) == [0, 0, 0]
assert cyclic([1, 2, 3, 4], 4) == [1, 2, 3, 4]

def odd_occurences(A):
    map = {}
    for el in A:
        if el in map:
            map.pop(el)
        else:
            map[el] = 1

    if len(map) != 1:
        raise Exception("Invalid input")

    return list(map.keys())[0]


def odd_occurences2(A):
    result = 0
    for el in A:
        result ^= el

    return result


assert odd_occurences([9, 3, 9, 3, 9, 7, 9]) == 7
assert odd_occurences([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]) == 11
assert odd_occurences([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11]) == 11

assert odd_occurences2([9, 3, 9, 3, 9, 7, 9]) == 7
assert odd_occurences2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]) == 11
assert odd_occurences2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11]) == 11