function solution(A) {
  if (!A.length) return 1 // If there was an element the first one must be 1

  const sorted = A.sort((a,b) => a - b) // Sort ASC

  for (let idx = 0; idx < sorted.length; idx++) {
    const expectedValue = idx + 1
    const currentMatchesExpected = sorted[idx] == expectedValue
    if (!currentMatchesExpected) return expectedValue // Missing value found
  }

  // If reached, the missing value is the last one (at sorted[sorted.length])
  return sorted.length + 1
}