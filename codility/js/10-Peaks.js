function solution(A) {
  if (A.length < 3) return 0; // No peaks can exist in fewer than 3 points

  // Record all peaks and possible counts to try later: There might be many peaks found, but only block counts with valid symmetrical size will work
  const maxCount = Math.floor(A.length / 3);
  const allPeaks = [];
  const blockCountOptions = []; // Save valid block counts here
  for (let i = 1; i < A.length - 1; i++) {
    const isPeak = A[i] > A[i - 1] && A[i] > A[i + 1];

    if (isPeak) {
      // If qualifies as a peak, record it
      allPeaks.push(i);

      // Can we use this block count option?
      const count = allPeaks.length;
      // Block count of 1 can always be used, no need to process, cannot be more than A.length / 3
      if (count > 1 && count <= maxCount) {
        const size = A.length / count;
        const isSizeValid = size % 1 === 0 && size >= 3; // Size must be integer and > 2
        if (isSizeValid) blockCountOptions.unshift(count); // Record with unshift because we want the max possible block number
      }
    }
  }

  if (allPeaks.length < 2) return allPeaks.length;

  // Loop through possible count expect count of 1: No need
  for (let countOption of blockCountOptions) {
    const size = A.length / countOption;
    // Only continue if size is an integer
    let blocksLeft = countOption;
    let peaksLeft = allPeaks.length;
    const isPeaksCountEnough = () => peaksLeft >= blocksLeft;
    while (isPeaksCountEnough()) {
      // Iterate through peaks and skip block every time
      const blockStart = A.length - blocksLeft * size;
      const blockEnd = blockStart + size;

      const peakPosition = allPeaks[allPeaks.length - peaksLeft];
      const isPeakinBlock =
        peakPosition >= blockStart && peakPosition <= blockEnd;

      if (isPeakinBlock) {
        // If peak found in block, check next block
        blocksLeft--;
        peaksLeft--;
      } else {
        // Otherwise check next peak
        peaksLeft--;
      }
    }

    if (blocksLeft === 0) return countOption;
  }

  return 1;
}

// TEST
// const arr = [0, 0, 0, 0, 0, 0, 0]
// const arr = [1, 2, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2]
const arr = [1, 3, 2, 1];
const res = solution(arr);

// TODO Solution 90%: Improve
