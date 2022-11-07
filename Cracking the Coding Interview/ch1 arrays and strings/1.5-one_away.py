# There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.

def solution(s, ss):
    if abs(len(s) - len(ss)) > 1:
        return False

    # Use 2 pointers to compare strings
    sIdx, ssIdx = 0, 0
    diff = False
    while sIdx < len(s) and ssIdx < len(ss):
        if s[sIdx] != ss[ssIdx]:
            if diff:
                # More than one edit needed
                return False
            diff = True
            if len(s) == len(ss):
                sIdx += 1
                ssIdx += 1
            elif len(s) > len(ss):
                sIdx += 1
            else:
                ssIdx += 1
        else:
            sIdx += 1
            ssIdx += 1

    return True


def test():
    cases = [
        {'input': ('pale', 'ple'), 'expected': True},
        {'input': ('pales', 'pale'), 'expected': True},
        {'input': ('pale', 'bale'), 'expected': True},
        {'input': ('pale', 'bake'), 'expected': False},
        {'input': ('pale', 'pale'), 'expected': True},
    ]
    for c in cases:
        assert solution(c['input'][0], c['input'][1]) == c['expected']
    print('All tests passed')


test()
