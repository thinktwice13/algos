# https://codility.com/media/train/7-MaxSlice.pdf

def fn(A):
    biggest, current = 0, 0
    for a in A:
        # current = max(0, current+a)
        updated = current + a
        if updated < 0:
            current = 0
        else:
            current = updated

        # max_slice = max(biggest, current)
        if current > biggest:
            biggest = current
    return biggest


assert fn([5, -7, 3, 5, -2, 4, -1]) == 10