function solution(A) {
  if (!A.length) return 1; // If there was an element the first one must be 1

  const sorted = A.sort((a, b) => a - b); // Sort ASC

  for (let idx = 0; idx < sorted.length; idx++) {
    const expectedValue = idx + 1;
    const currentMatchesExpected = sorted[idx] == expectedValue;
    if (!currentMatchesExpected) return expectedValue; // Missing value found
  }

  // If reached, the missing value is the last one (at sorted[sorted.length])
  return sorted.length + 1;
}

// Use XOR to pair and cancel numbers with their indices
function solutionB(A) {
  return (
    A.reduce((res, num, idx) => res ^ num ^ idx) ^ A.length ^ (A.length + 1)
  );
}

const A = [1, 2, 4, 5];
solutionB(A);
