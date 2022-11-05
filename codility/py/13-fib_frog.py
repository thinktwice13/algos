# https://app.codility.com/programmers/lessons/13-fibonacci_numbers/fib_frog/


def gen_next_fib(n):
    a, b = 1, 1
    yield 1
    while a + b <= n:
        yield a + b
        a, b = b, a + b


def solution(A):
    # Reversed fibonacci numbers to try biggest jumps first
    def fib(max_fib):
        print('fib', max_fib)
        vals = [1, 1]
        while vals[0] + vals[1] < max_fib:
            vals[:0] = [vals[0] + vals[1]]
        # Return list without the last value of 1
        return vals[:-1]

    # Memoize best jumps for each position
    # Extend with river bank position and starting position
    # Initialize with out-of-bounds jump count (len(A) + 1)
    memo = [len(A) + 2] * (len(A) + 2)
    memo[0] = 0  # No jumps needed to get to starting position

    jump_distances = fib(len(A) + 1)  # Biggest valid jump is the entire width of the river + 1 (len(A)+1)

    for pos in range(1, len(memo)):
        at_river_bank = pos == len(memo) - 1
        is_leaf = pos < len(A) + 1 and A[pos - 1] == 1
        if is_leaf or at_river_bank:
            # Add 1 jump to jump count found in memo list at current_position - jump_distance
            # Because we are building on previous jumps, only try jump distances smaller than current position
            for jd in jump_distances:
                if pos >= jd and memo[pos - jd] + 1 < memo[pos]:
                    memo[pos] = memo[pos - jd] + 1
                    if memo[pos] == 1:
                        break


    if memo[-1] <= len(memo):
         return memo[-1]
    return -1

r = solution([0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0])
print(r)
assert r == 3

# s2 = solution2([0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0])
# print(s2)
