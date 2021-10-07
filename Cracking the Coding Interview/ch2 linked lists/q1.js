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

// module.exports =  function(list) {
//   if (!list) {
//     return list;
//   }

//   let seen = new Set(),
//     node = list;

//   // add head
//   seen.add(node.val);
//   while (node.next) {
//     if (seen.has(node.next.val)) {
//       // skip next node
//       node.next = node.next.next;
//     }
//     else {
//       seen.add(node.next.val);
//       node = node.next;
//     }
//   }

//   return list; // return list, head will never change
// }