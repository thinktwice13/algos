# https://app.codility.com/programmers/lessons/5-prefix_sums/passing_cars/

def fn(A):
    our_car = A[0]
    column_count = 1 # Card traveling same direction as we are???
    passes = 0 # How many paases happened?

    for car in range(1,len(A)):
        direction = A[car]
        if direction == our_car:
            # Same direction as us, add to count
            column_count += 1
        else:
            # All cars traveling in our direction will pass this car
            passes += column_count

    return passes


assert fn([0, 1, 0, 1, 1]) == 5
assert fn([0,0,0,0,1]) == 4
assert fn([0,1,0,1,1,0,1,1,1]) == 14
