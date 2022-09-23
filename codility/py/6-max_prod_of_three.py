# https://app.codility.com/programmers/lessons/6-sorting/max_product_of_three/

def fn(A):
    A.sort()
    return max(A[-1] * A[0] * A[1], A[-1] * A[-2] * A[-3])


assert fn([-3, 1, 2, -2, 5, 6]) == 60
assert fn([-5, 5, -5, 4]) == 125
assert fn([-5, -6, -4, -7, -10]) == -120
assert fn([-4, -6, 3, 4, 5]) == 120
assert fn([-4, -6, 3, 4, 5, 10]) == 240
assert fn([-4, -6, 3, 4, 5, 10, 11]) == 550
assert fn([-5, -4, -3, -2, 3]) == 60
