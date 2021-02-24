function solution(A,B,K) {
  return Math.floor(B / K) - Math.ceil(A / K) + 1;
}

// TEST 
const res = solution(6, 11, 2)