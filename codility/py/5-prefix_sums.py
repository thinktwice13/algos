def passing_cars(A):
    eastbound, pairs = 0,0
    for car in A:
        if car == 0:
            eastbound+=1
        else:
            pairs += eastbound
            if pairs > 1000000000:
                return -1
    return pairs

assert passing_cars([0, 1, 0, 1, 1]) == 5
assert passing_cars([0,0,0,0,1]) == 4
assert passing_cars([0,1,0,1,1,0,1,1,1]) == 14
assert passing_cars([0]*1000000000 + [1,1]) == -1