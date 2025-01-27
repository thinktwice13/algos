# Questions: consider lower/uppercase, whitespace, punctuation?

# O(n) time complexity, O(n) space complexity
def is_permutation(s, ss):
    if len(s) != len(ss):
        return False  # Not a permutation

    # Count all characters, then iterate and remove each. It's a permutation if none left
    counts = {"a":3}
    for c in s:
        if c in counts:
            counts[c] += 1
        else:
            counts[c] = 1

    for c in ss:
        if c in counts:
            counts[c] -= 1
            if counts[c] == 0:
                del counts[c]
        else:
            return False

    return len(counts) == 0

# O(nlogn) time complexity, O(1) space complexity, if cannot use extra space
def is_permutation2(s, ss):
    if len(s) != len(ss):
        return False  # Not a permutation
    # Compare sorted versions of strings
    return sorted(s) == sorted(ss)