//  https://leetcode.com/problems/pascals-triangle/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function (numRows) {
  if (numRows === 0) return [];
  const triangle = [[1]];
  if (numRows === 1) return triagle;

  for (let row = 1; row < numRows; row++) {
    const rowCols = [1];
    triangle.push(rowCols);
    for (let col = 1; col < triangle[row - 1].length; col++) {
      const colValue = triangle[row - 1][col] + triangle[row - 1][col - 1];
      rowCols.push(colValue);
    }
    rowCols.push(1);
  }

  return triangle;
};

generate(5);
