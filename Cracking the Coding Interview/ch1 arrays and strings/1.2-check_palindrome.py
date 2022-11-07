# Check if a string is a permutation of a palindrome

# Questions: Case sensitive? Whitespace? Punctuation?

def solution(s, b):
    if len(s) != len(b):
        return False  # Not a permutation
    # Compare sorted versions of strings
    return sorted(s) == sorted(b)


def solution2(a, b):
    if len(a) != len(b):
        return False  # Not a permutation
    # Check if character counts are equal
    # Add to count at char code idx from a and subtract from count at char code idx from string b
    a_char_code = ord('a')
    counts = [0] * 128  # Assuming ASCII alphabet length
    for c in a:
        counts[ord(c) - a_char_code] += 1

    for c in b:
        if counts[ord(c) - a_char_code] == 0:
            # When iterating second string, count should never be less than 0
            return False
        else:
            counts[ord(c) - a_char_code] -= 1

    return True


assert solution('abc', 'cba') == True
assert solution2('abc', 'cba') == True
assert solution('abc', 'cb') == False
assert solution2('abc', 'cb') == False
assert solution('abc', 'cbad') == False
assert solution2('abc', 'cbad') == False
assert solution('abc', 'cbad') == False
assert solution2('abc', 'cbad') == False

