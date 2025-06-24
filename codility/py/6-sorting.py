def distinct(A):
    A.sort()
    count = 1
    for i in range(1, len(A)):
        if A[i] != A[i - 1]:
            count += 1

    return count


assert distinct([2, 1, 1, 2, 3, 1]) == 3
assert distinct([4, 6, 3, 5, 6, 4, 5, 5]) == 4

def max_product_of_three(A):
    A.sort()
    return max(
        A[0] * A[1] * A[-1],  # Covers scenario with two negative numbers
        A[-1] * A[-2] * A[-3]  # Covers all others: all pos, all neg, one neg
    )


assert max_product_of_three([-3, 1, 2, -2, 5, 6]) == 60
assert max_product_of_three([-5, 5, -5, 4]) == 125
assert max_product_of_three([-5, -6, -4, -7, -10]) == -120
assert max_product_of_three([-4, -6, 3, 4, 5]) == 120
assert max_product_of_three([-4, -6, 3, 4, 5, 10]) == 240
assert max_product_of_three([-4, -6, 3, 4, 5, 10, 11]) == 550
assert max_product_of_three([-5, -4, -3, -2, 3]) == 60
