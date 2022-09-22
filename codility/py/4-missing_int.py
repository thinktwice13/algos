# https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/

def fn(A):
    expected = 1
    store = {}
    for i in A:
        if i > expected:
            store[i] = True
        elif i == expected:
            expected += 1
            while expected in store:
                expected += 1

    return expected


assert fn([1, 3, 6, 4, 1, 2]) == 5
assert fn([1, 2, 3]) == 4
assert fn([-1, -3]) == 1
assert fn([-10, 2, 3, 4, 5, 6, 7, 8, 9, 10]) == 1
assert fn([10, 1, 2, 3, 4, 5, 6, 7, 8]) == 9
