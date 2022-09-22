function solution(A) {
  const map = {};

  for (let i = 0; i < A.length; i++) {
    // Map the value. If matched validCount, record idx and return
    const value = A[i];
    if (!map[value]) map[value] = 1;
    else map[value]++;

    // If leader found
    if (map[value] > Math.floor(A.length / 2)) return i;
  }

  return -1;
}

// TEST
const a = [3, 4, 3, 2, 3, -1, 3, 3];
const res = solution(a);
