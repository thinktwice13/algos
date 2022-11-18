# https://app.codility.com/programmers/lessons/14-binary_search_algorithm/min_max_division/

def block_count(nums, target_sum):
    block, b_sum = 1, nums[0]  # There is always at least 1 block
    for i in range(1, len(nums)):
        n = nums[i]
        if b_sum+n <= target_sum:
            # If sum with this number added is below target, add and remain in the same block
            b_sum += n
        else:
            # This is a new block starting with current number
            block += 1
            b_sum = n

    return block


# Use binary search with a range of possible large_sum values between lower bound and upper bound
# Check validity of large_sum by counting number of blocks needed to fit all numbers (block_count function)
def solution(K, _, A):
    hi = sum(A)  # Upper bound: All numbers in a single block (sum of all numbers)
    lo = max(A)  # Lower bound: large_sum is a single number in a block (it will have to be the largest found)
    best_large_sum = hi + 1  # Initialize best result with out-of-bounds result

    # Use binary search on possible solution as long as hi is > lo
    # O(N*search) where search is log(N+max_from_A)
    while hi >= lo:
        target_sum = (hi+lo)//2  # Use mid as a target block count to aim for
        if block_count(A, target_sum) > K:
            # If block_count found is higher than target (K), try again with higher low bound
            lo = target_sum+1
        else:
            # Numbers list split into equal or lower number of blocks than target.
            # This is ok because we are allowed to use empty blocks
            # Record this target_sum if it's the best result so far, but try to improve with lower high bound
            if target_sum < best_large_sum:
                best_large_sum = target_sum
            hi = target_sum-1

    return best_large_sum


def test():
    cases = [
        (3, 5, [2, 1, 5, 1, 2, 2, 2], 6),
        (3, 5, [2, 1, 5, 1, 2, 2, 2, 1], 7),
        (3, 5, [2, 1, 5, 1, 2, 2, 2, 1, 1], 8),
        (3, 5, [2, 1, 5, 1, 2, 2, 2, 1, 1, 1], 8),
    ]
    for k, m, a, expected in cases:
        got = solution(k, m, a)
        print('OK' if got == expected else 'ERR', k, m, a, got, expected)


test()