/**
 * @description Partition the linked list: All nodes with values p and bigger to the right side. No other ordering is required
 * @param {LinkedList} ll 
 * @param {number} p pivot number to use for partitioning
 */
const fn = (ll, p) => {
  if (!ll || !ll.next) return ll

  // Remove all nodes <= pivot and make them heads of the ll
  let n = ll.head
  while (n.next) {
    if (n.next.val <= p) {
      const smallerNode = n.next // Save small node
      n.next = smallerNode.next // If null, n will be last node
      smallerNode.next = ll.head
      ll.head = smallerNode
    }
    n = n.next
  }

  return ll
}