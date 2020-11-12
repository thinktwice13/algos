const fn = require('./fibonacci')

test('fibonacci', () => {
  expect(fn(4)).toEqual(3)
  expect(fn(6)).toEqual(8)
  expect(fn(9)).toEqual(34)
  expect(fn(15)).toEqual(610)
  expect(fn(28)).toEqual(317811) // O(2^n)
  expect(fn(40)).toEqual(102334155) // O(2^n)
})