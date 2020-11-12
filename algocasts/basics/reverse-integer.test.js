const fn = require('./reverse-integer')

test('reverse integer', () => {
  expect(fn(981)).toEqual(189)
  expect(fn(500)).toEqual(5)
  expect(fn(-15)).toEqual(-51)
  expect(fn(-90)).toEqual(-9)
})