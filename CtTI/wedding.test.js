const wedding = require('./wedding')

test('solution', () => {
  const w = wedding

  expect(w([1,3,2],[3,1,2])).toBe(true)
  expect(w([1,3,2],[3,1])).toBe(false)
  expect(w([1,3,2],[3,1,4])).toBe(false)
})