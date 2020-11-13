const Queue = require('./queue')

// Accept and weave two queues

const a = (q1, q2) => {
  const w = new Queue()

  while (q1.peek() || q2.peek()) {
    if (q1.peek()) w.add(q1.remove())
    if (q2.peek()) w.add(q2.remove())
  }

  return w
}

const b = (q1, q2, w = new Queue()) => {
  if (!q1.peek()) {
    if(!q2.peek()) return w;
    return b(q2, q1, w)
  }
  w.add(q1.remove())
  return !q2.peek() ? b(q1, q2, w) : b(q2, q1, w)
}

module.exports = { a, b }