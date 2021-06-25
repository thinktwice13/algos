// https://www.youtube.com/watch?v=Ifwf3DBN1sc&list=PLI1t_8YX-ApvMthLj56t1Rf-Buio5Y8KL&index=2

// On
const solution = (m, arr) => {
  const map = {}
  
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i]
    const complement = m - value
    if (map[complement] > -1) return [map[complement]+1,i+1] // If complement found, return
    if (!map[value]) map[value] = i // Store index to be found by its complement
  }
}

const menu = [1,4,5,3,2]
solution(4, menu)