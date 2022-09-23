function solution(A) {
  const sorted = A.sort((a, b) => b - a);

  // Always use biggest positive
  const a = sorted[0];

  let b = sorted[1] * sorted[2];
  // If all positive or all negative, always use next two biggest
  const oneSided = sorted[0] < 0 || sorted[sorted.length - 1] > 0;
  // If mixed, use latger od two next positives or two smallest negatives
  if (!oneSided)
    b = Math.max(b, sorted[sorted.length - 1] * sorted[sorted.length - 2]);

  return a * b;
}

function solutionB(A) {
  if (A.length < 4) return A.reduce((res, num) => res * num);
  const sorted = A.sort((a, b) => b - a);

  // If first os < 0, then all are. Take next biggest and abs smallest
  if (sorted[0] < 0) return sorted[0] * sorted[1] * sorted[sorted.length - 1];

  // If first is positive and rest are negative, take 3 first ones
  if (sorted[1] < 0) return sorted[0] * sorted[1] * sorted[2];

  // If first two are positive, use them and the max from next and last
  return sorted[0] * sorted[1] * Math.max(sorted[2], sorted[sorted.length - 1]);
}

// TEST
const arr = [-3, 1, 2, -2, 5, 6];
const res = solutionB(arr);
