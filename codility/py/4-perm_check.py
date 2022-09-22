# https://app.codility.com/programmers/lessons/4-counting_elements/perm_check/

def fn(A):
    A.sort()
    for i in range(len(A)):
        if A[i] != i+1:
            return 0

    return 1


assert fn([4, 1, 3, 2]) == 1
assert fn([4, 1, 3]) == 0
assert fn([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) == 1