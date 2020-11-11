const fn = require('./capitalize')

test('capitalize', () => {
  expect(fn('a simple sentence')).toEqual('A Simple Sentence')
  expect(fn('look, it is working!!!')).toEqual('Look, It Is Working!!!')
})