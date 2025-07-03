
def fn(A):
    best = float('inf')
    best_pos = 0

    for i in range(0, len(A) - 1):
        # Size of 2
        avg = (A[i] + A[i + 1]) / 2
        # Size of 3
        if i < len(A) - 2:
            avg = min(avg, (A[i] + A[i + 1] + A[i + 2]) / 3)
        if avg < best:
            best = avg
            best_pos = i

    return best_pos


assert fn([4, 2, 2, 5, 1, 5, 8]) == 1