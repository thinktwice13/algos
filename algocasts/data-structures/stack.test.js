const Stack = require('./stack')

test('queue', () => {
  const s = new Stack()
  s.add(3)
  
  s.add('x')

  expect(s.remove()).toEqual('x')

  s.add(' ')
  s.add(7)

  expect(s.remove()).toEqual(7)
  expect(s.remove()).toEqual(' ')
})