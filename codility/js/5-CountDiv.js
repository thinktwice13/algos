function solution(A,B,K) {
  return Math.floor(B / K) - Math.ceil(A / K) + 1;
}

// TEST
console.assert(solution(5, 11, 2) === 3, 'Test 1');