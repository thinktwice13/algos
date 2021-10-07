module.exports = (ll, p) => {
  if (!ll) throw new Error()
  
  let node = ll
  if (!node.next) return ll

  let saved = new LL()
  if (node.val >= p) {
    saved = new LL(node.val)
    ll = node.next
  }
  
  while (node.next) {
    if (node.next.val >= p) {
      saved.append(node.next.val)

      // Remove
      node.next = node.next.next
    }
    else node = node.next
    // if (node.next.val < p) {
    //   const move = node.next // save next node
    //   node.next = node.next.next // delete next node. Next in interation if nodes moved around
    //   move.next = ll // set moved node next to the start of ll
    //   ll = move // reassign ll to start at the last moved node
    // }
    // else node = node.next // Next in iteration if nothing changed
  }

  node.next = saved.head
  console.log(ll)

  // return ll
}

