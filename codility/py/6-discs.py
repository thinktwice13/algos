
def fn(A):
    if len(A) < 2:
        return 0
    # Map opening and closing points for each disc
    points = {}
    for center in range(len(A)):
        radius = A[center]
        opening = center - radius
        if opening not in points:
            points[opening] = [1, 0]
        else:
            points[opening][0] += 1

        closing = center + radius
        if closing not in points:
            points[closing] = [0, 1]
        else:
            points[closing][1] += 1

    # Keep count on intersections. Remove closing points from count when they are encountered first.
    intersections = 0
    current_open = 0
    # Sort points by their position
    seq = sorted(points.items())
    for i in seq:
        opening = i[1][0]
        closing = i[1][1]
        while opening > 0:
            # Intersect and count each opening disc at this point with all currently open discs
            # Because some might be open and closed at the same point
            intersections += current_open
            current_open += 1
            opening -= 1
            if intersections > 10000000:
                return -1
        current_open -= closing

    return intersections


assert fn([1, 5, 2, 1, 4, 0]) == 11
