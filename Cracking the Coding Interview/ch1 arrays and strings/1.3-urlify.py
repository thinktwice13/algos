# Replace all spaces in a string with %20. Assume enough space at end of string to hold additional characters

def solution(s):
    # When space found, set to % and remember next char to be written. Keep then in a queue

    l = [''] * len(s)
    for i in range(len(s)):
        if s[i] == ' ':
            l[i] = "%20"
        else:
            l[i] = s[i]

    return ''.join(l)


def solution2(s):
    # Assume string is a list of characters
    # Assuming there is enough space at end of string to hold additional characters, replace all spaces with %20 from the back
    # Iterate through string backwards, when space found, set to % and remember next char to be written. Keep then in a queue

    # Keep track of read and write indexes
    # Read idx is the true string index
    # Write idx is the index of the string with %20


def test():
    tests = [
        {'input': 'Mr John Smith', 'expected': 'Mr%20John%20Smith'},
        {'input': 'Mr John  Smith', 'expected': 'Mr%20John%20%20Smith'},
    ]
    for t in tests:
        if solution(t['input']) != t['expected']:
            print("Failed test with input {}. Got {}, want {}".format(t['input'], solution(t['input'])), t['expected'])
            return
    print('All tests passed')


test()
