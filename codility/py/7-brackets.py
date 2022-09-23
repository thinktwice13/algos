# https://app.codility.com/programmers/lessons/7-stacks_and_queues/brackets/

def fnf(S):
    if S is None or len(S) == 0:
        return 1

    stack_opening = []
    for char in S:
        if char == '(' or char == '[' or char == '{':
            # Always allow opening brackets
            stack_opening.append(char)
            continue

        empty = len(stack_opening) == 0
        if char == ')':
            if empty or stack_opening.pop() != '(':
                return 0
        elif char == ']':
            if empty or stack_opening.pop() != '[':
                return 0
        elif char == '}':
            if empty or stack_opening.pop() != '{':
                return 0

    return 1 if len(stack_opening) == 0 else 0


assert fnf('') == 1
assert fnf('()') == 1
assert fnf('()[]{}') == 1
assert fnf('(]') == 0
assert fnf('([)]') == 0
assert fnf('{[()()]}') == 1
assert fnf('([)()]') == 0
assert fnf('([)()]') == 0