// Eight Queens: Write an algorithm to print all ways of arranging eight queens on an 8x8 chess board so that none of them share the same row, column, or diagonal. In this case, "diagonal" means all diagonals, not just the two that bisect the board.

const placeQueen = (row = 0, columns = [], results = []) => {
  if (row === 8) {
    // Finished (outside of rows 0-7): Add to results
    results.push([...columns])
  } else {
    for (let c = 0; c < 8; c++) {
      // Check if position valid and add position to colukns
      if (isValid(row, c, columns)) {
        columns[row] = c
       placeQueen(row + 1, columns, results)
      }
    }

    // for (let c = 0; c < col; c++) {
    //     if (isValid(row, c, columns)) {
    //     columns[row] = c
    //     placeQueen(row + 1, c + 1, columns, results)
    //   }
    // }
  }
}

const isValid = (row, col, columns) => {
  for (let currRow = 0; currRow < row; currRow++) {
    const currRowPlacement = columns[currRow]

    if (currRowPlacement === col) return false

    // Check diagonals: If distance between row equals distance betwwen rows, they ar in the same diagoinal
    const colDistance = Math.abs(col - currRowPlacement);
    const rowDistance = row - currRow
    if (colDistance === rowDistance) return false
  }

  return true;
}

// const isValid = (row, col, columns) => {
//   // Check last row placed
//   if (columns.length > row) return false
//   // Check if column already occupied
//   if (columns.includes(col)) return false 

//   // Check diagonals by iterating distance
//   const maxDistance = row // If were checking row index 3, it means there are already 3 rows with queens placed
//   for (let currDistance = 1; currDistance <= maxDistance; currDistance++) {
//     const currRow = row - currDistance
//     // Invalid occupied column for this row and this diagonaldistance
//     const invalidRowCoords = [col - currDistance, col + currDistance]
//     if (invalidRowCoords.includes(columns[currRow])) return false
//   }
//   return true
// }

// TEST
// const valid = isValid(7,7,[ 0, 2, 4,6,1,3,5])
const p = placeQueen()