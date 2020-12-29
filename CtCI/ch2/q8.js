// Return a LL node at the start of a loop
class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

// /**
//  * Keep all nodes in a Set. Return the first one that repeats
//  */
// const getLoopStartNode = ll => {
//   const nodes = new Set()

//   let node = ll

//   while (node) {
//     if (nodes.has(node)) return node
//     nodes.add(node)
//     node = node.next
//   }

//   return undefined
// }


/**
 * Use slow/fast pointers
 * When they meet, reset the slow one and continue the same pace
 * They will meet again at the start of the loop
 */
const getLoopStartNode = ll => {
  let p1 = ll // fast
  let p2 = ll // slow

  while (p1.next && p1.next.next && p2.next) {
    p1 = p1.next.next
    p2 = p2.next

    // Break out if pointer meet
    if (p1 === p2) {
      break;
    }
  }

  // If while loop ended withour pointer meeting, there is no loop in ll
  if (!p2 || p1 !== p2) return null

  // Reset p2 (slow) and continue the same pace
  p2 = ll
  while (p1 !== p2) {
    p1 = p1.next
    p2 = p2.next
  }

  return p1 // Return either
}

// TEST
const ll = new Node(1)
ll.next = new Node(2)
ll.next.next = new Node(3)
ll.next.next.next = new Node(4)
ll.next.next.next.next = new Node(5)
ll.next.next.next.next.next = ll.next.next.next

const loopStartVal = getLoopStartNode(ll).val

loopStartVal