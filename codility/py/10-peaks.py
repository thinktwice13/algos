

def fn(mountain):
    if len(mountain) < 3:
        return 0

    peaks = []
    for i in range(1, len(mountain) - 1):
        if mountain[i - 1] < mountain[i] > mountain[i + 1]:
            peaks.append(i)

    if len(peaks) < 2:
        return len(peaks)

    # Attempt to fit all block sizes starting with the biggest possible (len(peaks))
    for count in range(len(peaks), 1, -1):
        # To continue, size and count must be factors of mountain length
        if len(mountain) % count == 0:
            size = len(mountain) / count
            found = set()
            # Try matching each with a block
            for peak in peaks:
                matching_peak_block = peak // size
                found.add(matching_peak_block)
                if len(found) == count:
                    return count

    # As last resort, mountain can be segmented in a single block
    return 1


assert fn([1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]) == 3
