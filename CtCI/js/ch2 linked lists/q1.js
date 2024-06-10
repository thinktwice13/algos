const ll = require('./util/LinkedList')


module.exports = function(ll) {
  if (!ll) return ll
  
  const seen = new Set()
  let node = ll
  seen.add(node.val)

  while (node.next) {
    // Check if seen
    if (seen.has(node.next.val)) node.next = node.next.next // In this case do not do node = node.next, because the while loop has a node node.next to check
    else {
      seen.add(node.next.val)
      node = node.next
    }
  }
  return ll
}

// Follow up: no extra space allowed
// Compare each visited node with all that follow
const fn2 = (ll) => {
  if (!ll) return ll

  let n1 = ll.head
  while(n1.next) {
    const n2 = n1.next
    while (n2) {
      const isDuplicate = n1.val === n2.val
      if (isDuplicate) n2.next = n2.next.next

      n2 = n2.next
    }
  }
}