# https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/flags/
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

    # Determine max number of possible flags
    # k = total_flags and flag_distance
    k = math.ceil((peaks[-1] - peaks[0]) ** 0.5)
    required_distance = k * (k - 1)
    if required_distance > peaks[-1] - peaks[0]:
        k -= 1

    print(k)
    while k > 2:
        planted = 1  # Always plant first flag
        last_planted = peaks[0]
        for i in range(1, len(peaks)):
            # Only plan flag if far enough from last planted and enough room for following flags
            if last_planted + k <= peaks[i] <= peaks[-1] - k * (k - planted - 1):
                planted += 1
                last_planted = peaks[i]
                if planted == k:
                    return k

    return k


assert fn([1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]) == 3
