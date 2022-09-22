# https://app.codility.com/programmers/lessons/4-counting_elements/max_counters/
def fn(N, A):
    # Keep track of the current highest counter and value they were all supposed to be maxed out
    max_at,highest = 0, 0
    counters = [0] * N
    for op in A:
        if op <= N:
            # Increase individual counter from its value or the last maxout
            counters[op-1] = max(counters[op-1], max_at) + 1
            # Keep highest counter up to date
            highest = max(highest, counters[op-1])
        else:
            # Update maxout value
            max_at = highest

    # Update all counters to last maxout value (if lower)
    for i in range(len(counters)):
        counters[i] = max(counters[i], max_at)

    return counters


assert fn(5, [3, 4, 4, 6, 1, 4, 4]) == [3, 2, 2, 4, 2]


