# https://app.codility.com/programmers/lessons/12-euclidean_algorithm/chocolates_by_numbers/

def solution(N,M):
    # Find the greatest common divisor
    def gcd(a,b):
        if b == 0:
            return a
        return gcd(b, a % b)

    # Find the least common multiple
    def lcm(a,b):
        return a * b // gcd(a,b)

    # Find the least common multiple of N and M
    # Divide by M to get the number of chocolates eaten
    return lcm(N,M) // M


    def lcm(a,b):
        return a * b // gcd(a,b)


assert solution(10,4) == 5