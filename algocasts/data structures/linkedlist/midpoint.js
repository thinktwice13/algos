// Return middle node of a linkedlist. Don't use counters and .size()

// Solution: Use slow+fast itetaros. Compare to get result
const midpoint = (ll, s = ll.getFirst(), f = ll.getFirst()) => 
  !f.next || !f.next.next
    ? s
    : midpoint(ll, s.next, f.next.next)


// Alt solution
// let s = ll.getFirst()
// let f = ll.getFirst()
// while (f.next && f.next.next) { // works because the exact reference of f does not matter!
//   f = f.next.next
//   s = s.next
// }
// return s

module.exports = midpoint