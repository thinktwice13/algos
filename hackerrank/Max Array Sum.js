// https://www.hackerrank.com/challenges/max-array-sum/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dynamic-programming

function maxSubsetSum(arr) {
  if (arr.length < 1) return 0
  if (arr.length < 2) return arr[0]
  if (arr.length < 3) return Math.max(arr[0],arr[1])

  let [prevMax, max] = [arr[0],Math.max(arr[0],arr[1])]

  for (let i = 2; i < arr.length;i++) {
    [prevMax, max] = [max,Math.max(arr[i], arr[i]+prevMax, max)]
  }

  return Math.max(max, prevMax)
}
const arr = [3,5,-7,8,10]
maxSubsetSum(arr)