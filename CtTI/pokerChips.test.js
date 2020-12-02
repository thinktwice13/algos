const pokerchips = require('./pokerChips')

test('solution', () => {
  const pc = pokerchips
  expect(pc(273)).toEqual([100,100,50,10,10,1,1,1].length)
  expect(pc(1)).toEqual(1)
})