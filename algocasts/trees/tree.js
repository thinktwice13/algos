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

}

module.exports = { Node, Tree }