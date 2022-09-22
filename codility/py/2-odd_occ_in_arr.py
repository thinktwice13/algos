# https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/

def fn(A):
    map = {}
    for el in A:
        if el in map:
            map.pop(el)
        else:
            map[el] = 1

    if len(map) != 1:
        raise Exception("Invalid input")

    return list(map.keys())[0]


def fn2(A):
    result = 0
    for el in A:
        result ^= el

    return result


assert fn([9, 3, 9, 3, 9, 7, 9]) == 7
assert fn([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]) == 11
assert fn([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11]) == 11

assert fn2([9, 3, 9, 3, 9, 7, 9]) == 7
assert fn2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]) == 11
assert fn2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11]) == 11