# https://app.codility.com/programmers/lessons/7-stacks_and_queues/nesting/

def fn(S):
    open_parens = []
    for char in S:
        if char == '(':
            open_parens.append(char)
        else:
            if len(open_parens) == 0:
                return 0
            open_parens.pop()

    return 1 if len(open_parens) == 0 else 0


assert fn('') == 1
assert fn('()') == 1
assert fn('(()(())())') == 1
assert fn('())') == 0
assert fn('(()(())())') == 1
