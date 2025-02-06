"""
Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
column are set to O .
"""

def zero_matrix(matrix):
    rows, cols = [], [] # Track idx if zeroes found in rows and cols

    for i, row in enumerate(matrix):
        for j, cell in enumerate(row):
            if cell == 0:
                rows.append(i)
                cols.append(j)

    # Set all columns in marked rows to 0
    for i in rows:
        matrix[i] = [0] * len(matrix[i])

    # Set all rows in marked columns to 0
    for i in cols:
        for row in matrix:
            row[i] = 0

    print(matrix)
    return matrix



assert(zero_matrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 0, 12], [13, 14, 15, 16]])) == [[1, 2, 0, 4], [5, 6, 0, 8], [0, 0, 0, 0], [13, 14, 0, 16]]