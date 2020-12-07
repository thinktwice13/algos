const Stack = require('./stack')

class QStack {
  constructor() {
    this.main = new Stack()
    this.temp = new Stack()
  }

  add(item) {
    // move all from main into temp
    while (this.main.peek()) {
      this.temp.add(this.main.remove())
    }
    //insert item
    this.main.add(item)
    // move all from temp to main
    while (this.temp.peek()) {
      this.main.add(thie.temp.remove())
    }
  }

  remove(item) {
    return this.main.remove()
  }
}

module.export = QStack