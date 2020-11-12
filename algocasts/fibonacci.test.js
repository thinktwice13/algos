const fn = require('./fibonacci')

test('fibonacci', () => {
  expect(fn(4)).toEqual(3)
  expect(fn(6)).toEqual(8)
  expect(fn(9)).toEqual(34)
})