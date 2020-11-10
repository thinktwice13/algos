const { a} = require('./array-chunks')
describe('array chunks', () => {

  test('A', () => {
    expect(a([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]])
    expect(a([1, 2, 3, 4, 5], 10)).toEqual([[1, 2, 3, 4, 5]])
  })

  test('B', () => {
    expect(a([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]])
    expect(a([1, 2, 3, 4, 5], 10)).toEqual([[1, 2, 3, 4, 5]])
  })
})