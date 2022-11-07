# Greatest common divisor
def gcd(a,b):
    if b == 0:
        return a
    return gcd(b, a % b)

# Least common multiple
def lcm(a,b):
    return a * b // gcd(a,b)