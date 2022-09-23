# https://app.codility.com/programmers/lessons/7-stacks_and_queues/stone_wall/

def fn(heights):
    count = 0
    blocks = []
    for height in heights:
        # Remove all higher blocks
        while len(blocks) and blocks[-1] > height:
            blocks.pop()

        if len(blocks) == 0 or blocks[-1] < height:
            # Add a new block
            blocks.append(height)
            count += 1

        # Ignore blocks of same height

    return count


assert fn([8, 8, 5, 7, 9, 8, 7, 4, 8]) == 7
