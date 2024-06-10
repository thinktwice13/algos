
// Check if palindrome
// No additional space On
const fn = (ll) => {
  if (!ll) return false
  if (!ll.next) return true

  const oldHead = ll.head

  /**
   * Use 2 pointers to find middle
   * Move all remaining nodes to the start (will be in reverse order)
   * Reset any pointer. Iterate from and compare from newHead and oldHead. All but maybe the last node should be the same
   */

  let p1 = ll.head
  let p2 = ll.head

  // (If !p1.next odd number od nodes)
  while (p1.next?.next) {
    p1 = p1.next.next
    p2 = p2.next
  }

  // Move all remaining p2 nodes to head (in rev order)
  while (p2.next != null) {
    const { next } = p2
    p2.next = next.next
    next.next = ll.head
  }

  // Reset pointers to hew and old head
  p1 = oldHead
  p2 = ll.head

  while (p2.next === oldHead) {
    if (p1.val !== p2.val) return false
    p1 = p1.next
    p2 = p2.next
  }

  // Here all nodes moved to the start have been checked
  // Only allow p1.next to exist (would be the middle of the original list)
  return !p1.next?.next
}