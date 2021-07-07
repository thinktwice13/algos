// https://leetcode.com/problems/excel-sheet-column-number/

/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  let alphabetLetters = 'Z'.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
  let offset = 'A'.charCodeAt(0) - 1;
  let col = 0;
  for (let i = columnTitle.length - 1; i >= 0; i--)
    col +=
      (columnTitle.charCodeAt(i) - offset) * 26 ** (columnTitle.length - 1 - i);

  return col;
};

const colTitle = 'ZY';
titleToNumber(colTitle);
