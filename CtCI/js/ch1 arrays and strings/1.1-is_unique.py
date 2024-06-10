# Check if string contains only unique characters without additional space used

def is_unique(s):
    """
    # Assuming all chars are lowercase ASCII
    # Keep checker as binary representation of chars seen (1 << ord(char) - ord('a') to offset for 'a')
    # ie For 'bd', checker will be 6 (1<<2 OR 1<<4 == 110). If current char code AND checker is zero, this is the first time to see a char. If already seen, return False
    """
    checker = 0
    for c in s:
        val = 1 << ord(c) - ord('a')  # Character code - 'a' code: b will be 2, c will be 2, d will be 4, etc.
        if checker & val == val:
            # Checking char against checker with AND will result in itself if already seen
            return False
        checker |= val  # ie For 'bd', checker will be 6 (1<<2 OR 1<<4 == 110). Char codes are unique, no overlap
    return True


def test():
    tests = [
        {'input': 'abc', 'expected': True},
        {'input': 'abd', 'expected': True},
        {'input': 'abca', 'expected': False},
        {'input': 'abcc', 'expected': False},
        {'input': 'abcc', 'expected': False},
    ]
    for t in tests:
        assert is_unique(t['input']) == t['expected']
    print('All tests passed')

test()