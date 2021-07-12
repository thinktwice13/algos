// // you can write to stdout for debugging purposes, e.g.
// // console.log('this is a debug message');

function solution(N, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let counters = new Array(N).fill(0);

  // Keep track current max of any of the couters and the target all of them should be increased to by maxCounters operation
  let maxCounterTarget = (maxOfCounters = 0);

  for (let operation = 0; operation < A.length; operation++) {
    // If operation is to increase one counter, increase from max of current max target and its value
    // Update current max of counters
    if (A[operation] <= N) {
      counters[A[operation] - 1] =
        Math.max(maxCounterTarget, counters[A[operation] - 1]) + 1;
      maxOfCounters = Math.max(maxOfCounters, counters[A[operation] - 1]);
      // If the operation is to max out the counters, only copy the maxOfCounters value to be used in other operations
    } else maxCounterTarget = maxOfCounters;
  }

  // In the end, any counters loer than current max target  should be increased
  return counters.map((num) => Math.max(num, maxCounterTarget));
}

// TEST
const n = 5;
const actions = [3, 4, 4, 6, 1, 4, 4];
const res = solution(n, actions);
