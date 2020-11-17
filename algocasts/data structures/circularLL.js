// Return true if linkedlist is circular

const isCircular = ll => {
  let s = ll.getFirst()
  let f = ll.getFirst()

  while (f.next && f.next.next) {
    s = s.next
    f = f.next.next
    if (f === s) return true
  }
  return false
}

module.exports = isCircular