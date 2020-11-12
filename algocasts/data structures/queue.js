class Queue {
  constructor() {
    this.data = []
  }
  
  add(item) {
    this.data.unshift(item)
  }

  remove(item) {
    return this.data.pop()
  }
}

module.exports = new Queue()