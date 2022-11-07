# You have to climb up a ladder. The ladder has exactly N rungs, numbered from 1 to N. With each step, you can ascend by one or two rungs. More precisely:

# combos calculates combinations of 2 for provided v and stores in memo
def combos(v, memo):
    if v < 0:
        return 0  # Invalid
    while len(memo) <= v:
        # Calculate all values up to memo[v]
        # If v < len(memo), then memo[v] this will not run
        memo.append(memo[-1] + memo[-2])
    return memo[v]


# pows calculates powers of 2 for provided v and stores in memo
def pows(v, memo):
    if v not in memo:
        memo[v] = 1 << v  # Faster than pow(2, v)
    return memo[v]

def solution(A, B):
    combo_memo, mod_memo = [0,1,2,3,5], {}
    result = [0] * len(A)
    for i in range(len(A)):
        # For modulos with values of powers of 2, use bitwise AND (value-1)
        # Here, all in mod_memo are 2**n
        result[i] = combos(A[i], combo_memo) & (pows(B[i], mod_memo)-1)
    return result


def test():
    cases = [
        {'input': ([4,4,5,5,1], [3,2,4,3,1]), 'expected': [5,1,8,0,1]},
        {'input': ([1,1,1,1,1], [1,1,1,1,1]), 'expected': [1,1,1,1,1]},
        {'input': ([1,1,1,1,1], [2,2,2,2,2]), 'expected': [1,1,1,1,1]},
        {'input': ([1,1,1,1,1], [3,3,3,3,3]), 'expected': [1,1,1,1,1]},
    ]
    for c in cases:
        if solution(*c['input']) != c['expected']:
            print("Failed test with input {}. Got {}, want {}".format(c['input'], solution(*c['input']), c['expected']))
            return
    print('All tests passed')

test()