# https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_slice_sum/

def fn(A):
    biggest, current = 0, 0
    for v in A:
        """
        If current slice sum is > 0, add update with whatever the next value is, but keep above zero
        Else (current slice below zer), make current sum whatever is higher between itself and iterated value only 
        """
        # current = max(0, current + v) if current >= 0 else max(current, v)
        # biggest = max(biggest, current)

        if current < 0:
            if v > current:
                current = v
        elif current + v > 0:
            current += v
        else:
            current = 0
        if current > biggest:
            biggest = current

    return biggest


assert fn([3, 2, -6, 4, 0]) == 5
