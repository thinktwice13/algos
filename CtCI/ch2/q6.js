// Is LL a palindrome?

 

 /**
  * Iterate with fast/slow pointer, sabving slow pointer nodes to a stack until midpoint reached.
  * Continue iterating slow pointer until end. Return false if values of s.next and stack.pop() do not match
  */
const isLinkedListPalindrome = ll => {

  // Pointers
  let f = ll
  let s = ll

  // Return true if length 1
  if (!f.next) return true;
  
  // Save first half of the LL here. Initialize with head
  const stack = []

  while (f.next?.next) {
    stack.push(s.val)
    
    f = f.next.next;
    s = s.next;
  }

  if (f.next) stack.push(s.val)

  // Continue iterating slow and comparing to stack
  while (s.next) {
    if (stack.pop() !== s.next.val) return false
    s = s.next
  }

  return true
}

// TEST
class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }

  addNext(val) {
    this.next = new Node(val)
    return this.next
  }
}

const ll = new Node("a")
ll
  .addNext('b')
  .addNext('b')
  .addNext('a')

