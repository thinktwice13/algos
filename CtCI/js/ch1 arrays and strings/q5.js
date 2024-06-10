/**
 * One away
 * Check if two strigs are one edit away from each other
 * POssible acitons: insert, remove, replace
 *
 * * Solution:
 * Map one string and check agaist the other
 * If there is only one odd character left, it can be inserted/removed
 * If there are two odd characters left, they can be replaced
 * ! Must be length +/- <= 1 of each other
 *
 * * Complexity
 * Time O(short string)
 * Space O1
 */

const fn = (a, b) => {
  // Check if lengths +/- <= 1 of each other
  const areLengthsValid = Math.abs(a.length - b.length) <= 1;
  if (!areLengthsValid) return false;

  const [short, long] = a.length <= b.length ? [a, b] : [b, a];

  // Iterate shorter string (or equal)
  let shortIdx = 0;
  let longIdx = 0;
  let diffFound = false; // Only allow one dif

  while (short[shortIdx] !== undefined) {
    if (short[shortIdx] === long[longIdx]) {
      // Both chars equal, next position
      shortIdx++;
      longIdx++;
    } else {
      // Diff found
      if (diffFound) return false;
      // This is the second diff. Return false
      else {
        diffFound = true;
        // Adjust indices. If equal lengths, advance both
        if (short.length === long.length) {
          shortIdx++;
          longIdx++;
        } else {
          // Otherwise advance longer one
          longIdx++;
        }
      }
    }
  }

  // If we make it here, they are one edit away
  return true;
};

fn('ple', 'pfe');
fn('ple', 'pffe');
