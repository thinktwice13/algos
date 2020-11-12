//Print out n-th entry in fibonacci series
const fib = n => 
  n < 2
    ? n
    : fib(n - 1) + fib(n - 2)

module.exports = fib