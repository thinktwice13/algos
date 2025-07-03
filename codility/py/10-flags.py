import math


def fn(mountain):
    if len(mountain) < 3:
        return 0

    # Record peak indexes
    peaks = []
    for i in range(1, len(mountain) - 1):
        if mountain[i - 1] < mountain[i] > mountain[i + 1]:
            peaks.append(i)

    if len(peaks) < 2:
        return len(peaks)

    # Determine max possible number of flags
    # k = total_flags and flag_distance
    k = math.ceil((peaks[-1] - peaks[0]) ** 0.5)

    # Required total distance is pow2 of k reduces for one step ok
    # It is because first flag can be planted on first peak and steps are counted starting from there
    required_distance = k * (k - 1)

    # Due to math.ceil, this will happen when distance between first and last peak is bigger than a perfect squar
    # Reduce for 1
    if required_distance > peaks[-1] - peaks[0]:
        k -= 1

    """
    Lower possible k while checking if flags can be planted according to the task rules starting from second peak
    """
    while k > 2:
        planted = 1  # Always plant first flag on first peak
        last_planted = peaks[0]  # Keep track of last planted idx
        for i in range(1, len(peaks)):
            # Only plant flag if far enough from last planted and enough room for following flags
            min_pos = last_planted + k
            max_pos = peaks[-1] - k * (k - planted - 1)
            if min_pos <= peaks[i] <= max_pos:
                planted += 1
                last_planted = peaks[i]
                if planted == k:
                    return k

    return k


assert fn([1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]) == 3
