function solution(A) {
  // Map all peak indices so we could later compare distances
  const peaks = [];
  for (let i = 1; i < A.length - 1; i++) {
    const isPeak = A[i] > A[i - 1] && A[i] > A[i + 1]; // It is a peak if left and right points are lower
    if (isPeak) peaks.push(i);
  }

  // If there are fewer than 2 peaks, distances do not matter
  if (peaks.length < 3) return peaks.length;

  // Max possible number of flags is a root of the distance between first and the last peak
  const firstPeakIdx = peaks[0];
  const lastPeakIdx = peaks[peaks.length - 1];
  const maxFlags = Math.floor(Math.sqrt(lastPeakIdx - firstPeakIdx) + 1);

  // Iterate reverse from max possible flags to minimum (2) and check if all peaks match requirements
  // Minimum number of flags to try is 3: 2 flags can be planted an oany 2 peaks (2 is the minimum possible distance between peaks)
  for (let i = maxFlags; i > 2; --i) {
    // We need i number of flags in total: Check if sum of planted flags and remaining peaks to check is enough to match requirements (i)
    let plantedFlags = 1; // Always plant one (last) peak
    let lastPlanted = peaks.length - 1;
    let testedPeak = peaks.length - 2;

    const arePeaksInvalid = () => plantedFlags + testedPeak + 1 < i;
    while (!arePeaksInvalid()) {
      // Get distance from last planted flag
      const distance = peaks[lastPlanted] - peaks[testedPeak];
      // Peak is valid if distance is larger or equal to currently tested scenario (i)
      const isFarEnough = distance >= i;
      // If valid, plant flag
      if (isFarEnough) {
        plantedFlags++;
        lastPlanted = testedPeak;
        if (plantedFlags === i) return i; // Return early if max possible flags already planted
      }
      // Test next peak (reverse direction)
      testedPeak--;
    }

    // If planted all i required flags, return
    if (plantedFlags === i) return i;
  }
}

const arr = [1, 5, 3, 4, 3, 4, 1, 2, 3, 4, 6, 2];
// const arr = [0, 0, 0, 0, 0, 1, 0, 1, 0, 1]
const s = solution(arr);
