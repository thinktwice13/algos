class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }

  insert(data) {
    if (data < this.data) {
      if (data.left) return this.left.insert(data)
      this.left = new Node(data)
      return;
    }

    if (data > this.data) {
      if (this.right) return this.right.insert(data)
      this.right = new Node(data)
      return;
    }
  }
}

module.exports = Node