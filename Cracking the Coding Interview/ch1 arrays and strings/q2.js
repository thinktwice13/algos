// Check if two strings are a permutation of each other

/**
 * Things to check:
 * case sensitivity and whitespace significance
 */

// Assuming case snsitive and whitespace significat:

// Solution A: Sort both and compare. Must be the same
const arePermA = (a, b) => {
  // Must be of the same length
  if (a.length !== b.length) return false;

  return a.split('').sort().join('') === b.split('').sort().join('');
};

// Solution B: Map one of the strings and check against char of other
// In js, use set
const arePermB = (a, b) => {
  // Must be of the same length
  if (a.length !== b.length) return false;

  const map = {};
  for (let i = 0; i < a.length; i++) map[a[i]] = (map[a[i]] || 0) + 1;

  // Check against b
  for (let i = 0; i < b.length; i++) {
    const mapped = map[b[i]];

    if (mapped > 1) map[b[i]]--;
    // Remove from map when encountered
    else if (mapped === 1) delete map[b[i]];
    // If only one left, delete key from map
    else return false; // If no equivalents found in map, they are not permutations
  }

  return true;
};

arePermB('Abc', 'bAc');
arePermB('abc', 'bAc');
