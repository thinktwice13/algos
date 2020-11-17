// retrieve element n spots from the end of a linkedlist. Do not use size() method


module.exports = (ll, n) => {
  let s = f = ll.getFirst()

  // Advance f from n spots
  // for (let i = 0; i < n; i++) {
  //   if (f.next) {
  //     f = f.next
  //   } else return null
  // }
  while (n > 0) {
    f = f.next
    n--
  }

  // Then move at the same speed until end
  while (f.next) {
    f = f.next
    s = s.next
  }
  return s
}