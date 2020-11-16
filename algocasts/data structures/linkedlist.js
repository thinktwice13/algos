

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
    let node = this.head

    if (!node) return null
  }

  insertLast(data) {
    this.getLast().next = new Node(data)
  }

  getAt(idx) {
  }

  removeAt(idx) {
    if (idx === 0) this.removeFirst()
    else this.getAt(idx - 1).next = this.getAt(idx + 1)
  }

  insertAt(data, idx) {
    if (idx === 0) this.insertFirst(data)
    else {
      const prev = this.getAt(idx - 1)
      prev.next = new Node(data, prev.next.next)
    }
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