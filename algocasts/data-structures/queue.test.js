const Queue = require('./queue')

test('queue', () => {
  const q = new Queue()
  
  q.add(3)
  q.add('x')

  expect(q.remove()).toEqual(3)
  expect(q.data.length).toBe(1)

  q.add(' ')
  q.add(7)

  expect(q.remove()).toEqual('x')
  expect(q.remove()).toEqual(' ')
  expect(q.data.length).toBe(1)

  expect(q.peek()).toEqual(7)
  expect(q.data.length).toBe(1)

})