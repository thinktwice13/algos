class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }

  insert(data) {
    if (data == this.data) return;
    if (data < this.data) {
      if (this.left) this.left.insert(data)
      else this.left = new Node(data)
    } else {
      if (this.right) this.right.insert(data)
      else this.right = new Node(data)
      return;
    }
  }

  contains(data, n = this) {
    if (!n) return null
    if (data === n.data) return n;
    if (data < n.data) return this.contains(data, n.left)
    if (data > n.data) return this.contains(data, n.right)
    return null
  }
}

module.exports = Node