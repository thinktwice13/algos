# Check if provided string is a permutation of a palindrome
# Constraints: case-insensitive, ignore white

def solution(s):
    if len(s) <= 1:
        return True

    # Keep 1 << char flags and cancel when char pair is found.
    # End result should be zero or power of 2 (in case one char is left from the odd-length palindrome)
    flags = 0
    for c in s:
        if c != ' ':
            # Toggle bit representing current character's lowercase code minus code for 'a' char (to reduce to 0-25 range)
            # ie Toggling char 'd' will result in 1 << 3 == 1000
            v = 1 << (ord(c.lower()) - ord('a'))
            if flags & v == v:
                # Already set, cancel
                flags ^= v
            else:
                # Not set, set
                flags |= v


    # Make sure there is no more than 1 flag set
    return flags == 0 or (flags & (flags - 1)) == 0


def test():
    cases = [
        {'input': 'Tact Coa  ', 'expected': True},
        {'input': 'Tact Cob', 'expected': False},
        {'input': '  Tact Cobr ', 'expected': False},
    ]
    for c in cases:
        assert solution(c['input']) == c['expected']
    print('All tests passed')


test()
