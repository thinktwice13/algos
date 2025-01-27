"""
Rotate Matrix: Given an image represented by an NxN matrix, where each pixel in the image is 4
bytes, write a method to rotate the image by 90 degrees. Can you do this in place?
"""
def rotate_matrix(matrix):
    # Validate matrix
    if len(matrix) == 0 or len(matrix) != len(matrix[0]):
        return False

    print(matrix)
    # Iterate layers then length - 1 top cells. Save first cell them move others back
    n = len(matrix)
    for row in range(n//2):
        # Iterate all but last element in layer
        first = row
        last = n - 1 - row
        for i in range(first, last):
            offset = i - first # offset from first marks the current element in layer
            matrix[first][i], matrix[i][last], matrix[last][last-offset], matrix[last-offset][first] = matrix[last-offset][first], matrix[first][i], matrix[i][last], matrix[last][last-offset]

    return matrix


assert rotate_matrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]) == [[13, 9, 5, 1], [14, 10, 6, 2], [15, 11, 7, 3], [16, 12, 8, 4]]