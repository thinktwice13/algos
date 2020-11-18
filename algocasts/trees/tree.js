class Node {
  constructor(data) {
    this.data = data
    this.children = []
  }

  add(data) {
    this.children.push(new Node(data))
    return this
  }

  remove(data) {
    this.children = this.children.filter(child => child.data !== data)
    return this
  }
}

class Tree {
  constructor() {
    this.root = null // manually updated
  }

  // needs to keep a record of a correct order using an array. Initialize with this.root
  traverseBF(fn, list = [this.root]) {
    if (!list.length) return this;
    
    const node = list.shift()
    list.push(...node.children)
    fn(node)
    return this.traverseBF(fn, list)
  }

  traverseDF(fn, root = this.root) {
    fn(root)
    for (let child of root.children) {
      this.traverseDF(fn, child)
    }
    return this;
  }
}

module.exports = { Node, Tree }