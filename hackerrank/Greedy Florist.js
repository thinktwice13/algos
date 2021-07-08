// https://www.hackerrank.com/challenges/greedy-florist/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=greedy-algorithms

function getMinimumCost(k, c) {
  if (c.length < 3) return 3;

  c.sort((a, b) => a - b);

  c;

  let round = 0; // Buy in rounds of length k (num of friends)
  let cost = 0;
  let flower = c.length - 1; // Start from most expensive flowers

  while (flower > -1) {
    // Each friend next most expensive flower
    for (let friend = 0; friend < k; friend++) {
      if (flower < 0) return cost;
      // Buy flower
      cost += (round + 1) * c[flower];
      --flower;
      flower;
      friend;
    }
    ++round;
  }

  return cost;
}

const k = 3;
const flowers = [1, 3, 5, 7, 9];
getMinimumCost(k, flowers);
