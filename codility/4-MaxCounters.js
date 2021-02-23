
// // you can write to stdout for debugging purposes, e.g.
// // console.log('this is a debug message');

function solution(N, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let counters = new Array(N).fill(0)
  let maxCounter  = 0 // Will be used to adjust all lower values at the time of return
  let currentMax = 0 // True max of all counters (currentMax)

  if (!A.length) return counters

  for (let targetCounter of A) {
    if (targetCounter > N) {
      // Increase all to max
      
      // counters = new Array(N).fill(max)// Do not recreate entire counters array. Onlt record the max and use when counter touched
      maxCounter = currentMax
    } else {
      // Increase affected
      
      // Match with max
      if (counters[targetCounter - 1] < maxCounter) {
        counters[targetCounter - 1] = maxCounter
      }

      // Increase
      counters[targetCounter - 1]++;

      // Check curent max
      currentMax = Math.max(currentMax, counters[targetCounter - 1])

    }
  }

  // Increase all lower than maxCounter
  return counters.map(counter => counter < maxCounter ? maxCounter : counter)
}

// TEST
const n = 5
const actions = [3, 4, 4, 6, 1, 4, 4]
const res = solution(n, actions)