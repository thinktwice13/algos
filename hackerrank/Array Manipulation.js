// https://www.hackerrank.com/challenges/crush/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

/**
 * Complete the 'arrayManipulation' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

// O(n+queries.length) time, O(n) space
function arrayManipulation(n, queries) {
  // Write your code here
  
  // Map query start and end positions and the difference in value they bring (k)
  const operations = Array(n) // Modifying arrays is expensive. Create the max possible sie immediately (x2 because each operation has start and end position)
  for (let i = 0; i < queries.length; i++) {
    const [start, end, value] = queries[i]
    
    // Record operation start value
    operations[start - 1] = (operations[start - 1] || 0) + value
    
    // Record operation end value
    operations[end] = (operations[end] || 0) - value
  }
  
  // Process each item in operations array. 
  // Undefined items present no change in value -> Use value of previous item
  let max = 0
  for (let i = 0;i < operations.length;i++) {
    if (operations[i] === undefined) operations[i] = operations[i - 1] || 0
    else {
      operations[i] = (operations[i - 1] || 0) + operations[i]
      max = Math.max(max, operations[i])
    }
  }

  return max
}

// const queries = [[1,5,3],[4,8,7],[6,9,1]]
const queries = [[1,2,100],[2,5,100],[3,4,100]]
arrayManipulation(5, queries)

