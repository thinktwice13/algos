
def is_unique(s):
    # Ask about the character set. If ASCII, we know the size (128 or extended 256)
    checker = 0  # Checker serves as flags for character position in ASCII table. If we encounter it again, return False
    for c in s:
        flag = 1 << (ord(c) - ord('a'))  # Character code - 'a' code: b will be 2, c will be 3, d will be 4, etc.
        # If we have marked it already in checker, return False
        if flag & checker == flag:
            return False
        # Otherwise, save to checker
        checker |= flag
    return True


assert is_unique("qwerty") == True
assert is_unique("qwertq") == False
