const fn = require('./max-chars')

test('max-chars', () => {
  expect(fn('abcccd')).toEqual('c')
  expect(fn('apple 123111')).toEqual('1')
})