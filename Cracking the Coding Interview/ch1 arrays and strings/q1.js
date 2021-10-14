/**
 * Check if all characters of a string are unique
 */

const isUniqueA = (str) => {
  // Sort string. Fail if char equal to previous
  if (str.length < 2) return true;

  const sorted = str.split('').sort();

  for (let i = 1; i < sorted.length; i++) {
    if (sorted[i] === sorted[i - 1]) return false;
  }

  return true;
};

const isUniqueB = (str) => {
  if (str.length < 2) return true;

  // Keep encountered chars in a set. Fail if any encountered twice
  const s = new Set();
  for (let char of str) {
    if (s.has(char)) return false;
    s.add(char);
  }
  return true;
};

/**
 * With no additional space: compare every char to all others
 * On2 + O1
 * True time complexity is (n^2)/2
 */
const isUniqueC = (str) => {
  for (let i = 0; i < str.length - 1; i++) {
    for (let ii = i + 1; ii < str.length; ii++) {
      if (str[i] === str[ii]) return false;
    }
  }

  return true;
};

const str = 'acb';
isUniqueC(str);

/**
 * NOTE
 * Confirm if ASCII or Unicode
 * Can reeturn false if str length execeeds given table max (ASCII 128, Extended ASCII 256)
 * In this case, time complexity could be cosidered to be O1 as we're setting the upper limit ourselves
 */
