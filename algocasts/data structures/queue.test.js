const q = require('./queue')

test('queue', () => {
  q.add(3)
  q.add('x')

  expect(q.remove()).toEqual(3)

  q.add(' ')
  q.add(7)

  expect(q.remove()).toEqual('x')
  expect(q.remove()).toEqual(' ')
})