// https://www.hackerrank.com/challenges/count-triplets-1/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dictionaries-hashmaps

/**
 * There are 2 steps to each number forming a triplet:
 * if has to find a multiple and its multiple has to find a multiple. Add to count when it happens
 */
function countTriplets(arr, r) {
  let count = 0
  const map = {} // Record<num, [occurrences, occurrencesWithMultiple]>

  for (let i = arr.length - 1; i >= 0; --i) {
    const num = arr[i] // This is me
    const multiple = num * r // This is my first multiple

    if (!map[num]) map[num] = [0,0] // Init

    // If my multiple has its own multiple recored, we're a triplet
    count += (map[multiple]?.[1] || 0)

    // If my multiple has been recorded, we're a pair
    map[num][1] += (map[multiple]?.[0] || 0)

    map[num][0]++ // Separate this from initial !map[num] check for cases where r equals 1 and I am my own multiple
  }

  return count
}

// const a = Array(100000).fill(1237)
// const expected = 166661666700000
// countTriplets(a,1) === expected

const a = [2,2,2,2]
countTriplets(a,1)