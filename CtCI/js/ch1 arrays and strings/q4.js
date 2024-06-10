/**
 * Check if string is a permutation of a palindrome
 * ! Consider case sensitivity and whitespace significance
 *
 * * SolutionA: Use set to remember encountered chars. Remove when found again
 * * Return true if there are < 2 items left in set (even perm or 1 odd char perm. Two remaining items would mean it is not a permutation)
 * Time On: only iterates string length
 * Space On: worst case, all characters will be different and the set size will be equal to string
 *
 *
 */

const isPalinPerm = (str) => {
  if (str.length < 2) return true; // Single char str is always true

  const s = new Set();
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // * This considers whitespace and is case sensitive
    if (s.has(char)) s.delete(char);
    else s.add(char);
  }

  return s.size < 2;
};

const str = 'aabbccddef';
isPalinPerm(str);
