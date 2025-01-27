"""
One Away: There are three types of edits that can be performed on strings: insert a character,
remove a character, or replace a character. Given two strings, write a function to check if they are
one edit (or zero edits) away.
EXAMPLE
pale, pIe -> true
pales. pale -> true
pale. bale -> true
pale. bake -> false
"""


def one_away(s, ss):
    # Do not qualify if the difference in length is more than 1
    if abs(len(s) - len(ss)) > 1:
        return False

    # If the lengths are the same, the only option is to replace a character
    if len(s) == len(ss):
        diff = 0
        for i in range(len(s)):
            if s[i] != ss[i]:
                diff += 1
            if diff > 1:
                return False
        return True

    # If the lengths are different, we tolerate one character offset
    # Iterate over the shorter string and compare with the longer string
    if len(s) > len(ss):
        s, ss = ss, s
    diff = 0
    i = 0
    for j in range(len(s)):
        # If we have a difference, there was a character inserted in the longer string. This is the only allowed difference
        if s[i] != ss[j]:
            diff += 1
            if diff > 1:
                return False
        else:
            # Move the short char to catch up with the long char
            i += 1

    return True


assert one_away("pale", "ple") == True
assert one_away("pales", "pale") == True
assert one_away("pale", "bale") == True
assert one_away("pale", "bake") == False
assert one_away("pale", "pale") == True
assert one_away("pale", "pales") == True
assert one_away("pale", "palee") == True
assert one_away("pale", "paleee") == False