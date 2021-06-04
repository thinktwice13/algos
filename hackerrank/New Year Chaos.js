/** https://www.hackerrank.com/challenges/new-year-chaos/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen */

/**
 * @param {number[]} q integer array
 */
const minimumBribes = (q) => {
  let bribes = 0;

  for (const idx in q) {
    const currentPosition = Number(idx);
    const originalPosition = q[idx] - 1; // value and original position of person

    if (originalPosition - currentPosition > 2)
      return console.log('Too chaotic');

    // Add to beibes when a person has received one. Check eveything from its original position - 1 to its current position
    const start = Math.max(0, originalPosition - 1);
    for (let ii = start; ii < currentPosition; ii++) {
      // It is a bribe if person checked has value greater than its originalPosition
      if (q[ii] > originalPosition) bribes++;
    }
  }

  console.log(bribes);
};

const q = [1, 2, 5, 3, 7, 8, 6, 4];
minimumBribes(q);
