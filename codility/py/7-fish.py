# https://app.codility.com/programmers/lessons/7-stacks_and_queues/fish/

def fn(A, B):
    downstream_fish, survived = [], 0
    for f in range(len(A)):
        size = A[f]
        if size == 1:
            # Flowing downstream
            downstream_fish.append(size)
        else:
            """
            Flowing upstream
            Eat or get eaten by downstream fish            
            """
            while len(downstream_fish) and downstream_fish[-1] < size:
                # Eat all smaller fish flowing downstream
                downstream_fish.pop()

            # IF all downstream fish eaten, this fish survives
            if len(downstream_fish) == 0:
                survived += 1

    return survived + len(downstream_fish)


assert fn([4, 3, 2, 1, 5], [0, 1, 0, 0, 0]) == 2
