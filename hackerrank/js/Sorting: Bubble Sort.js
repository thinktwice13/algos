// https://www.hackerrank.com/challenges/ctci-bubble-sort/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting

function countSwaps(a) {
  // Write your code here
  // if (a.length < 2) return; // Not allowed by task contraint

  let swapCount = 0;
  for (let i = 0; i < a.length; i++) {
    // Only iterate nested loop until the last item sorted and pushed to the end of the array
    for (let ii = 0; ii < a.length - i; ii++) {
      // Swap adjacent elements if they are in decreasing order
      if (a[ii] > a[ii + 1]) {
        const [lg, sm] = [a[ii], a[ii + 1]];
        a[ii] = sm;
        a[ii + 1] = lg;
        swapCount++;
      }
    }
  }

  console.log(`Array is sorted in ${swapCount} swaps.`);
  console.log(`First Element: ${a[0]}`);
  console.log(`Last Element: ${a[a.length - 1]}`);
}

countSwaps([6, 4, 1]);
