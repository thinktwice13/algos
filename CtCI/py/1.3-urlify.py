"""
URLify: Write a method to replace all spaces in a string with '%20: You may assume that the string
has sufficient space at the end to hold the additional characters, and that you are given the "true"
length of the string. (Note: If implementing in Java, please use a character array so that you can
perform this operation in place.)

EXAMPLE
Input: "Mr John Smith    ", 13
Output: "Mr%20J ohn%20Smith"
"""
def urlify(s):
    return s.strip().replace(" ", "%20")

assert urlify("Mr John Smith    ") == "Mr%20John%20Smith"

def urlify2(s):
    s = s.strip() # Something wrong with the task? It says we should assume true length of the string, but then it gives us the length of the string. So we need to strip it
    # Count spaces
    spaces = 0
    for c in s:
        if c == " ":
            spaces += 1
    # Calculate new length
    new_len = len(s) + spaces * 2
    # Create new string
    new_s = [""] * new_len
    i = new_len - 1
    for j in range(len(s) - 1, -1, -1):
        if s[j] == " ":
            new_s[i] = "0"
            new_s[i - 1] = "2"
            new_s[i - 2] = "%"
            i -= 3
        else:
            new_s[i] = s[j]
            i -= 1
    s = "".join(new_s)
    print(s)
    return s

assert urlify2("Mr John Smith    ") == "Mr%20John%20Smith"
