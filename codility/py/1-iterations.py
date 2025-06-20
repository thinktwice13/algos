def fn(N):
    # convert to bin
    b = bin(N)[2:]

    best, current = 0, 0
    for c in b:
        if c == '0':
            current += 1
        else:
            best = max(best, current)
            current = 0

    return best


assert fn(9) == 2
assert fn(529) == 4
assert fn(1041) == 5
assert fn(32) == 0
assert fn(int('1001000', 2)) == 2
