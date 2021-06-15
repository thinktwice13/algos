// https://www.hackerrank.com/challenges/luck-balance/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms

/**
 * Filter important contests. Lose all unimportant contests.
 * Sort important contests by luck DESC and lose k contests
 */

function luckBalance(k, contests) {
  // Write your code here
  let totalLuck = 0;

  const importantLuck = [];

  for (const contest of contests) {
    const [luck, isImportant] = [contest[0], contest[1] === 1];
    if (isImportant) importantLuck.push(luck);
    else totalLuck += luck;
  }

  importantLuck.sort((a, b) => b - a);

  for (let i = 0; i < importantLuck.length; i++) {
    totalLuck += i < k ? importantLuck[i] : -importantLuck[i];
  }

  return totalLuck;
}

const contests = [
  [5, 1],
  [2, 1],
  [1, 1],
  [8, 1],
  [10, 0],
  [5, 0],
];
luckBalance(3, contests);
