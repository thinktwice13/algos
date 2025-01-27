"""
String Compression: Implement a method to perform basic string compression using the counts
of repeated characters. For example, the string aabcccccaaa would become a2b1c5a3. If the
"compressed" string would not become smaller than the original string, your method should return
the original string. You can assume the string has only uppercase and lowercase letters (a - z).
"""
from traceback import print_exception


def compress(s):
    # Is string len is 2, it's either two different letters, or two of the same, in which case we need to return the original string
    if len(s) < 3:
        return s

    current, count, compressed = s[0], 1, ""
    for i in range(1,len(s)):
        c = s[i]
        if c == current:
            count += 1
        else:
            compressed += current + str(count)
            current = c
            count = 1

    compressed += current
    if count > 1:
        compressed += str(count)

    if len(s) == len(compressed):
        compressed = s

    return compressed


tests = {
    "": "",
    "a": "a",
    "bb": "bb",
    "aabcccccaaa": "a2b1c5a3",
    "aabbccdd": "aabbccdd",
    "aabccccca": "a2b1c5a"
}

for k in tests.keys():
    if compress(k) != tests[k]:
        print(f"Error with {k}")