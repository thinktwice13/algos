
// Given a singly linked list, arrange the nodes such that all even index nodes appear before the odd index nodes.
// When we refer to "index" we are referring to the node's zero-indexed position in the input (original) list.
// The relative ordering of the nodes within the same region must be maintained.
const { Node, List } = require('../algocasts/data-structures/linkedlist/linkedlist')

const fn = head => {
  if (!head || !head.next) return head

  // Create dummy lists (using only references)
  let curr = head
  let index = 0
  const evenDummy = new Node()
  const oddDummy = new Node()
  let evenTail = evenDummy
  let oddTail = oddDummy

  // iterate and updaye tails 
  while (!!curr) {
    if (index % 2 === 0) { // even
      evenTail.next = curr
      evenTail = curr
    } else { // odd
      oddTail.next = curr
      oddTail = curr
    }
    
    curr = curr.next
    index++
  }
  evenTail.next = oddDummy.next
  const res = new List()
  res.head = evenDummy.next
  
  const data = []
  res.forEach(n => {
    data.push(n.data)
  })
  return data
}

// NOTE must have dummies to retain the data while tail point at a different node each iteration

module.exports = fn