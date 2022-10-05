function solution(A) {
  // Save max slices for forwerd pointer and reverse pointer at each idx
  const fwd = Array(A.length);
  const rev = Array(A.length);
  let maxSum = 0; // Total max sum

  for (let i = 1; i < A.length - 1; i++) {
    // Update slice sum for fwd pointer by adding the current value to the slice sum at previous idx
    fwd[i] = Math.max(0, A[i] + (fwd[i - 1] || 0));

    // Repeat for rev pointer (ii is mirror i)
    const ii = A.length - 1 - i;
    rev[ii] = Math.max(0, A[ii] + (rev[ii + 1] || 0));

    // If i is past the half of the array, we have enough info to start checking for final result
    if (i >= A.length / 2) {
      maxSum = Math.max(
        maxSum, // Current biggest max sum
        (fwd[i - 1] || 0) + (rev[i + 1] || 0), // Check fwd slice against previously saved rev max sums
        (fwd[ii - 1] || 0) + (rev[ii + 1] || 0) // Check rev slice against previously saved fwd max sums
      );
    }
  }
  return maxSum;
}

// TEST
const arr = [5, 17, 0, 3];
const r = solution(arr);
