// https://www.hackerrank.com/challenges/minimum-swaps-2/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
  let swapCount = 0;
  let position = 0;

  while (position < arr.length) {
    // If number in its place
    if (arr[position] === position + 1) position++;
    else {
      // Swap with any number occupying this number's posiiton
      const temp = arr[arr[position] - 1];
      arr[arr[position] - 1] = arr[position];
      arr[position] = temp;
      swapCount++;
    }
  }

  return swapCount;
}

const arr = [7, 1, 3, 2, 4, 5, 6];
minimumSwaps(arr);
