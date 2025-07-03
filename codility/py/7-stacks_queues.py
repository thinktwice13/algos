
def brackets(S):
    if not S:
        return 1

    if len(S) & 1:
        return 0

    stack = []
    for c in S:
        if c in '({[':
            stack.append(c)
        else:
            if not stack:
                return 0
            top = stack.pop()
            if (c == ')' and top != '(') or (c == '}' and top != '{') or (c == ']' and top != '['):
                return 0

    return 1 if not stack else 0

assert brackets("") == 1  # empty string
assert brackets("()") == 1
assert brackets("[]") == 1
assert brackets("{}") == 1
assert brackets("{[()()]}") == 1
assert brackets("(([]){})") == 1
assert brackets("({[]})") == 1
assert brackets("[{()}](){}") == 1
assert brackets("(") == 0
assert brackets("]") == 0
assert brackets("([)]") == 0
assert brackets("({[})]") == 0
assert brackets("(()") == 0
assert brackets("())") == 0
assert brackets("}") == 0       # closing bracket with no opener
assert brackets("{") == 0       # opening bracket only
assert brackets("}{") == 0      # reversed closing then opening
assert brackets("[({})](]") == 0  # almost valid but one mismatch at end
assert brackets("}") == 0       # closing bracket with no opener
assert brackets("{") == 0       # opening bracket only
assert brackets("}{") == 0      # reversed closing then opening
assert brackets("[({})](]") == 0  # almost valid but one mismatch at end

def fish(A,B):
    downstream,survived = [], 0
    for i in range(len(A)):
        size, dir = A[i],B[i]
        # Move downstream fish to their stack
        if dir == 1:
            downstream.append(size)
        else:
            # Eat all smaller downstream fish
            while downstream and downstream[-1] < size:
                downstream.pop()
            # If all eaten, upstream fish survives
            if not downstream:
                survived += 1

    # Total survivors include survived downstream fish amd and recorded count of upstream survived fish
    return len(downstream) + survived

def nesting(S):
    open_params = 0
    for c in S:
        if s == "(":
            open_params += 1
        elif open_params:
            open_params -= 1
        else:
            return 0
    # open_params needs to be empty
    return 1 if not open_params else 0
