

// Return kth to last item in a LinkedList

function A(ll, k) {
  if (!ll) throw new Error("invalid list")

  // Set pointer one to positin K
  let p1 = ll
  let position = 1
  while (position <= k) {
    if (!p1.next) throw new Error('list is not long enough')
    else p1 = p1.next
    position++
  }

  // Move both pointers until p1 reached end
  // p2 will be at the ll.size - k position
  let p2 = ll
  while (p1.next) {
    p1 = p1.next
    p2 = p2.next
  }

  return p2.val
}

// TODO Solution 2: Sort

module.exports = { A }