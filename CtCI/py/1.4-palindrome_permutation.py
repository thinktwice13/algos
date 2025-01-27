"""
Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palin-
drome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation
is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words.
EXAMPLE
Input: Tact Coa
Output: True (permutations: "taco cat". "atco cta". etc.)
"""
def palin_perm(s):
    """
    A palindrome has all characters in pairs, and potentially one additional unpaired character in the middle.
    We can check and then verify that we have at most one character that is not in pair.
    This ignores whitespace, punctuation, and case.
    """

    # Count all characters
    counts = {}
    for c in s:
        c = c.lower()
        # Ignore if not in ASCII a-Z
        if not (ord('a') <= ord(c) <= ord('z')):
            continue
        if c in counts:
            counts[c] += 1
        else:
            counts[c] = 1

    # Check if we have more than one character that is not in pair
    odd_count = 0
    for c in counts:
        if counts[c] % 2 == 1:
            odd_count += 1
        if odd_count > 1:
            return False

    return True

assert palin_perm("Tact Coa") == True
assert palin_perm("abbcdbba") == False
assert palin_perm("Tact Coaa") == False