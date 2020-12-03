const isPrime = require('./is-prime')

test('isPrime', () => {
  expect(isPrime(5)).toBe(true)
  expect(isPrime(8)).toBe(false)
  expect(isPrime(11)).toBe(true)
  expect(isPrime(21)).toBe(false)
  expect(isPrime(29)).toBe(true)
})