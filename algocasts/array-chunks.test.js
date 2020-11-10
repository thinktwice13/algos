const fn = require('./array-chunks')

test('array chunks', () => {
  expect(fn([1,2,3,4,5])).toEqual([[1,2],[3,4],[5]])
})