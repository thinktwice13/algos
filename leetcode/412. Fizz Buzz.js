// https://leetcode.com/problems/fizz-buzz/

var fizzBuzz = function(n) {
  const arr = Array(n).fill('')
  
  for (let i = 1;i <= n; i++) {
    if (i%3===0) arr[i - 1] += 'Fizz'
    if (i%5===0) arr[i - 1] += 'Buzz'
    
    if (!arr[i-1]) arr[i-1] = String(i)
  }

  return arr
};

fizzBuzz(15)