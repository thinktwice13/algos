const fn = require('./even-odd-partitaion')
const { Node, List } = require('../algocasts/data-structures/linkedlist/linkedlist')

test('even odd partition', () => {
  const ll = new List()
  const h = ll.head = new Node(5)
  ll.insertLast(1)
  ll.insertLast(3)
  ll.insertLast(7)
  ll.insertLast(3)
  ll.insertLast(10)

  expect(fn(h)).toEqual( [ 5, 3, 3, 1, 7, 10 ])
  
})