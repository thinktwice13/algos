function solution(A, B) {
  // write your code in JavaScript (Node.js 8.9.4)
const memoFib = {}
const modLimit = (1 << Math.max(...B)) - 1 // Avoid big integers. Max js limit  is reached around fib(78)
const getFib = n => {
  // if (n < 1) return 0 // Will never be < 2
  if (n < 3) return 1;
  if (!memoFib[n]) {
    memoFib[n] = (getFib(n - 1) + getFib(n - 2)) & modLimit
    // console.log(n, memoFib[n], memoFib[n] < Number.MAX_SAFE_INTEGER)
  }
  return memoFib[n];
}

  // Memo values from B for in case of big arrays (can only be up to 31 per specs)
  const memoB = {}
  if (B.length < 31) {
    let b = 1
    while (b <= 31) {
      memoB[b] = (1 << b) - 1
      b++;
    }
  }

  return A.map((el, idx) => {
    const fibNum = el + 1
    const stepCombinations = getFib(fibNum)

    // Modulos with large numbers are slow. Use bit shifting (mod with 2^n is equal to discarding all bits up up to n)
    const modVal = B[idx]
    const mod = memoB[modVal] || (1 << modVal) - 1

    return stepCombinations & mod
  })
}

// function solution(A, B) {
//   const L = A.length
//   // write your code in JavaScript (Node.js 8.9.4)
//   const modLimit = (1 << Math.max(...B)) - 1 // Avoid big integers. Max js limit  is reached around fib(78)
//   const fibs = {1: 1, 2: 1}
//   let f = 3
//   // Per specs, each element of array A is an integer within the range [1..L];
//   while (f <= L + 2) {
//     fibs[f] = (fibs[f - 1] + fibs[f - 2]) & modLimit
//     f++;
//   }

//   // Memo values from B for in case of big arrays (can only be up to 31 per specs)
//   const memoB = {}
//   if (B.length < 31) {
//     let b = 1
//     while (b <= 31) {
//       memoB[b] = (1 << b) - 1
//       b++;
//     }
//   }

//   return A.map((el, idx) => {
//     const stepCombinations = fibs[el + 1]

//     // Modulos with large numbers are slow. Use bit shifting (mod with 2^n is equal to discarding all bits up up to n)
//     const modVal = B[idx]
//     const mod = memoB[modVal]

//     return stepCombinations & mod
//   })
// }

const a = [4, 4, 5, 5, 1]
const b = [3, 2, 4, 3, 1]

const r = solution(a, b)