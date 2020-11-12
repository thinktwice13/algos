const fn = require('./find-vowels')

test('find vowels', () => {
  expect(fn('hello')).toEqual(2)
  expect(fn('mario')).toEqual(3)
  expect(fn('CHOo choo')).toEqual(4)
})