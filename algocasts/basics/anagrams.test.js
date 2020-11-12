const fn = require('./anagrams')

test('anagrams', () => {
  expect(fn('HE Llo','L L eh o!!!')).toBe(true)
})