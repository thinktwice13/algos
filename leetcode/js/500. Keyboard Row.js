// https://leetcode.com/problems/keyboard-row/

/**
 * @param {string[]} words
 * @return {string[]}
 */
const findWords = function (words) {
  if (words.legth < 1) return [];
  const rows = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
  return words.filter((word) => {
    if (word.length < 2) return true;

    const w = word.toLowerCase();
    // Find matching row
    let row;
    if (rows[0].indexOf(w[0]) > -1) row = 0;
    else if (rows[1].indexOf(w[0]) > -1) row = 1;
    else if (rows[2].indexOf(w[0]) > -1) row = 2;
    else return false;

    let position = 1;
    while (rows[row].indexOf(w[position]) > -1) position++;

    // If entire wprd chcked and char can be found in the same row as first char
    if (position >= w.length) return true;

    // Otherwise, cannot be typed in the same row
    return false;
  });
};

const words = ['omk'];
findWords(words);
