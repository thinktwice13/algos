// https://www.hackerrank.com/challenges/mark-and-toys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting&h_r=next-challenge&h_v=zen

function maximumToys(prices, k) {
  // Write your code here
  // Sort toys ASC
  const sorted = prices.sort((a, b) => a - b);
  let budget = k;
  let toysBought = 0;
  for (const toy of sorted) {
    if (budget < toy) return toysBought;
    budget -= toy;
    toysBought++;
  }

  return toysBought;
}
