/**
 * https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup
 */
const fn = (c) => {
  let steps = 0;
  let position = 0;
  while (position < c.length - 1) {
    if (c[position + 2] == 0) position += 2;
    else if (c[position + 1] == 0) position++;
    else return Infinity;
    steps++;
  }

  return steps;
};

const input = [0, 0, 1, 0, 0, 1, 0];
const expected = 3;
const r = fn(input);
