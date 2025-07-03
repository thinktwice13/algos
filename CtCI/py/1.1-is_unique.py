
def is_unique(s):
    # Ask about the character set. If ASCII, we know the size (128 or extended 256)
    checker = 0  # Checker is a bin flag for character position in ASCII table. If we encounter it again, return False
    for c in s:
        flag = 1 << (ord(c) - ord('a'))  # Flag is a character code - 'a' code: b will be 2, c will be 3, d will be 4, etc.
        # If we have seen it before, all the positions with match and it returns the same value
        if flag & checker == flag:
            return False
        # Otherwise, add to checker
        checker |= flag
    return True


assert is_unique("qwerty") == True
assert is_unique("qwertq") == False
