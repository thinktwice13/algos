# https://app.codility.com/programmers/lessons/4-counting_elements/frog_river_one/

def fn(max_pos, leaves):
    steps = {}

    for sec, leaf in enumerate(leaves):
        # Skip if already recorded or unnecessary fpr our target
        if leaf in steps or leaf > max_pos or leaf <= 0:
            continue
        # Record leaf
        steps[leaf] = True
        # Impossible for all necessary leaves to have fallen
        if sec < max_pos-1:
            continue
        # Return when fallen leaves match the target position
        if len(steps) == max_pos:
            return sec

    return -1


assert fn(5, [1, 3, 1, 4, 2, 3, 5, 4]) == 6
