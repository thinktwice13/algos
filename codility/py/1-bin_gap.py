# https://app.codility.com/programmers/lessons/1-iterations/binary_gap/

def fn(N):
    b = bin(N)[2:]
    stripped = b.strip('0')
    stripped = stripped.strip('1')

    max_count, current_count = 0,0
    for d in stripped:
        if d == '1':
            current_count = 0
            continue

        current_count += 1
        if current_count > max_count:
            max_count = current_count

    return max_count

assert fn(9) == 2
assert fn(529) == 4
assert fn(1041) == 5
assert fn(32) == 0
