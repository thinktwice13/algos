# https://app.codility.com/programmers/lessons/10-prime_and_composite_numbers/min_perimeter_rectangle/

def fn(n):
    """
    Perimeter = 2 * (sideA + sideB)
    Smaller diff between rectangle sides equals smaller perimeter
    Find closest sides
    """
    a = int(n ** 0.5)
    b = n / a
    return 2 * (a + b)


def test_fn():
    t = [9, 12, 30, 24, 25]
    e = [12, 14, 22, 20, 20]
    for i in range(len(t)):
        res = fn(t[i]) == e[i]
        if res is False:
            print("For %d expected %d got %d" % (t[i], e[i], fn(t[i])))
            raise AssertionError


test_fn()
