const Queue = require('./queue')

// Accept and weave two queues

const weave = (q1, q2) => {
  const w = new Queue()

  while (q1.peek() || q2.peek()) {
    if (q1.peek()) w.add(q1.remove())
    if (q2.peek()) w.add(q2.remove())
  }

  return w
}

module.exports = weave