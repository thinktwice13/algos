# https://app.codility.com/programmers/lessons/7-stacks_and_queues/fish/

def fn(A, B):
    downstream_sizes, survived = [], 0

    for pos in range(len(A)):
        size = A[pos]
        print(pos, size, B[pos], downstream_sizes, survived)
        if B[pos] == 1:
            # Flowing downstream
            downstream_sizes.append(size)
        else:
            """
            Flowing upstream
            Eat or get eaten by downstream fish            
            """
            while len(downstream_sizes) and downstream_sizes[-1] < size:
                # Eat all smaller fish flowing downstream
                downstream_sizes.pop()

            # IF all downstream fish eaten, this fish survives
            if len(downstream_sizes) == 0:
                survived += 1

    count = survived + len(downstream_sizes)
    print(count)
    return count


assert fn([4, 3, 2, 1, 5], [0, 1, 0, 0, 0]) == 2
