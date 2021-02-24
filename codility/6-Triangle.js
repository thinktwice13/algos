function solution(A) {
  const sorted = A
    .sort((a, b) => b - a)
    .filter(i => i >= 0) // Tip: Cannot make a trianglo using negative values

  // sorted.length - 2 is the last chance to find a triangle
  for (let i = 0; i < sorted.length - 2; i++) {
    const a = sorted[i];

    // b cannot be smaller than a/2 + 1
    let ii = i + 1
    while (ii < sorted.length - 1) {
      const b = sorted[ii]
      if (b > a / 2) {
        // Find c: must be bigger than the difference between a and b
        const diff = a - b;
        let iii = ii + 1
        while (iii < sorted.length) {
          const c = sorted[iii];
          if (c > diff) return 1;
          iii++
        }     
      }
      ii++;
    }
  }

  return 0
}

// TEST
const arr = [10, 2, 5, 1, 8, 20]
const hasTriangle = solution(arr)