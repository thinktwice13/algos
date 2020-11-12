const fn = require('./matrix')

test('matrix', () => {
  expect(fn(3)).toEqual([[1,2,3],[8,9,4],[7,6,5]])
  expect(fn(4)).toEqual([[1,2,3,4],[12,13,14,5],[11,16,15,6],[10,9,8,7]])
})