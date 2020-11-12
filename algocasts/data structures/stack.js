class Stack {
  constructor() {
    this.data = []
  }
  
  add(item) {
    this.data.unshift(item)
  }

  remove(item) {
    return this.data.shift()
  }
}

module.exports = new Stack()