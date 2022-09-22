# https://app.codility.com/programmers/lessons/3-time_complexity/frog_jmp/

import math


def fn(pos, target_pos, jump_distance):
    return math.ceil((target_pos - pos) / jump_distance)


assert fn(10, 85, 30) == 3
assert fn(10, 100, 30) == 3
assert fn(10, 100, 10) == 9
