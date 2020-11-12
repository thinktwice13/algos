//Print out n-th entry in fibonacci series
const memo = fn => {
  const cache = {}

  return (...args) => {
    // if set of args exists in cache, return
    // otherwise calculate and save for future reference
    if (!cache[args]) {
      cache[args] = fn.apply(this, args)
    }
    return cache[args]
  }
}

const fib = memo(
  n =>
    n < 2
      ? n
      : fib(n - 1) + fib(n - 2)
)

module.exports = fib