
def solution(A, B):
    count = 0
    for a, b in zip(A, B):
        print(a,b)
        # Keep dividing lcm by gcd until gcd is 1
        # If that is lcm as also one, then a and be have same prime divisors
        # Add to count
        g = gcd(a, b)
        l = lcm(a, b)
        while g > 1:
            print(g,l)
            g = gcd(g, l)
            l //= g
        else:
            # Add to count
            if l == 1:
                count += 1
    return count


def gcd(a, b):
    if b == 0:
        return a
    return gcd(b, a % b)


def lcm(a, b):
    return a * b // gcd(a, b)


# gcd(75, 15)
# lcm(75, 15)

res = solution([15, 10, 3], [75, 30, 5])
print(res)
assert res == 1
