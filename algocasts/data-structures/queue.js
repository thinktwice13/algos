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

  peek() {
    return this.data[this.data.length -1]
  }
}

module.exports = Queue