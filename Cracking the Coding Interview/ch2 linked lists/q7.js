const { Node } = require('./util/LinkedList')
/**
 * LL Nodes have a reference to the next node. If two lL intersect, the intersecting node will have a .next reference to the same tail
 * Check diff in lengths and ignore the difference in the start of the longer list - making the iterating lengths the same
 * Iterate both at the same time
 */

const getLen = ll => {
  let counter = 0;
  let node = ll;
  while (node.next) {
    counter++
    node = node.next
  }

  return counter
}

const skip = (ll, diff) => {
  while (diff > 0) {
    ll = ll.next
    --diff
  }
  return ll
}

const doLinkedListsIntersect = (a,b) => {
  aLen = getLen(a)
  bLen = getLen(b)

  // Will not run for shorter lists
  aNode = skip(a, aLen - bLen)
  bNode = skip(b, bLen - aLen)

  // If both exist, check if intersection
  // If one ends, return undefined
  while (aNode && bNode) {
    if (aNode === bNode) return aNode
    aNode = aNode.next
    bNode = bNode.next
  }

  return undefined
}