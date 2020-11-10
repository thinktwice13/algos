const { a, b, c } = require('./reverse-string')

it('solution A', () => {
  expect(a('hello')).toEqual('olleh')
  expect(a('Greetings')).toEqual('sgniteerG')
  expect(a(' i87')).toEqual('78i ')
})

it('solution B', () => {
  expect(b('hello')).toEqual('olleh')
  expect(b('Greetings')).toEqual('sgniteerG')
  expect(b(' i87')).toEqual('78i ')
})

it('solution C', () => {
  expect(c('hello')).toEqual('olleh')
  expect(c('Greetings')).toEqual('sgniteerG')
  expect(c(' i87')).toEqual('78i ')
})