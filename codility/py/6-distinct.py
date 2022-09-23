# https://app.codility.com/programmers/lessons/6-sorting/distinct/

def fn(A):
    return len(set(A))


def fn2(A):
    h = {}
    non_distinct = 0
    count = 0
    for i in A:
        if i not in h:
            h[i] = True
        else:
            non_distinct += 1

    return len(h)


def fn3(A):
    A.sort()
    count = 1
    for i in range(1, len(A)):
        if A[i] != A[i - 1]:
            count += 1

    return count


assert fn3([2, 1, 1, 2, 3, 1]) == 3
assert fn3([4, 6, 3, 5, 6, 4, 5, 5]) == 4
