

class Node {
  constructor(data, next) {
    this.data = data
    this.next = next

    return this
  }
}


class List {
  constructor() {
    this.head = null
    return this
  }

  insertFirst(data) {
    this.head = new Node(data, this.head)
  }

  size() {
    let count = 0
    let node = this.head
    while (node) {
      count++
      node = node.next
    }
    return count
  }

  getFirst() {
    return this.head
  }

  getLast() {
    let node = this.head
    if (!node) return null
    while(node.next) {
      node = node.next
    }

    return node
  }

  clear() {
    this.head = null
  }

  removeFirst() {
    this.head = this.head.next
  }

  removeLast() {
    // when empty
    if (!this.head) return;
    // when size === 1
    if (!this.head.next) {
      this.head = null;
      return;
    }

    // rest
    let node = this.head
    while (node.next.next) {
      node = node.next
    }

    node.next = null
  }

  insertLast(data) {
    let last = this.getLast()
    let inserted = new Node(data)

    if (last) last.next = inserted
    else this.head = inserted
  }

  getAt(idx) {
    if (idx > this.size() - 1) return null

    let at = 0
    let node = this.head
    while(at < idx) {
      node = node.next
      at++
    }
    return node
  }

  removeAt(idx) {
    if (!this.head) return;
    if (idx === 0) this.removeFirst()
    else this.getAt(idx - 1).next = this.getAt(idx + 1)
  }

  insertAt(data, idx) {
    if (idx < 0) return;
    if (idx === 0) {
      return this.insertFirst(data)
    }
    const size = this.size()
    if (idx >= size) return this.insertLast(data)
    
    let prev = this.getAt(idx - 1)
    // const toInsert = new Node(data, prev.next)
    prev.next = new Node(data, prev.next)
  }

  forEach(fn) {
    let node = this.head
    fn(node)
    while(node.next) {
      node = node.next
      fn(node)
    }
  }
}

module.exports = { Node, List}