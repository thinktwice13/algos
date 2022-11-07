# https://app.codility.com/programmers/lessons/13-fibonacci_numbers/fib_frog/


def solution(A):
    # Strategy:
    # Memoize best jumps for each position and build next jumps on previous ones
    # Extend with river bank position and starting position for easier comparison with previous jumps
    # Initialize with out-of-bounds jump count (len(A) + 2)

    # Generate fibonacci numbers up to a max of len(A) + 1 (single jump to river bank)
    distances = [1, 1]
    # Look for max fib num of entire width of river + river bank + 1 offset fro starting position of zero
    while distances[-1] + distances[-2] <= len(A) + 1:
        distances.append(distances[-1] + distances[-2])
    distances = distances[1:]  # Remove unnecessary last value of 1
    distances = distances[::-1]  # Reverse to start with largest distance

    counts = {0: 0}  # No need to jump to starting position
    for pos in range(1, len(A) + 2):
        # Only proceed if on river bank or position is a leaf
        if (pos == len(A) + 1) or ((pos < len(A) + 1) and (A[pos - 1] == 1)):
            counts[pos] = len(A) + 2  # Initialize with out-of-bounds jump count
            # Add 1 jump to count found in memo list at current_position - jump_distance
            for jd in distances:
                if pos >= jd:
                    from_position_count = counts.get(pos - jd, len(A) + 2)
                    # Only record new jump count if position > jump distance (avoid jumping over the bank) and count would be better than any other previously attempted combination (currently recorded)
                    if pos >= jd and ((from_position_count + 1) < counts[pos]):
                        counts[pos] = from_position_count + 1
                        if counts[pos] == 1:
                            # Skip further attempts, 1 jump is best case for any position
                            break

    # Worst case is to have to jump to the river bank in steps of 1
    if counts[len(A) + 1] <= len(A) + 1:
        return counts[len(A) + 1]
    return -1


def test():
    cases = [
        {'input': [], 'expected': 1},
        {'input': [1], 'expected': 1},
        {'input': [0, 0, 0, 0], 'expected': 1},
        {'input': [0, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0], 'expected': 3},
        {'input': [0], 'expected': 1},
        {'input': [1], 'expected': 1},
        {'input': [0, 1, 0, 1], 'expected': 1},
    ]

    for c in cases:
        if solution(c['input']) != c['expected']:
            print("Failed test with input {}. Got {}, want {}".format(c['input'], solution(c['input']), c['expected']))
            return
    print('All tests passed')


test()
