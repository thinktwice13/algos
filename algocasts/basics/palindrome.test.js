const { a, b } = require('./palindrome')


describe('check palnidrome', () => {
  test('A', () => {
    expect(a('abba')).toBe(true)
    expect(a('abcba')).toBe(true)
    expect(a('abcd')).toBe(false)
  })

  test('B', () => {
    expect(b('abba')).toBe(true)
    expect(b('abcba')).toBe(true)
    expect(b('abcd')).toBe(false)
  })
})