// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
    this.events = {}
  }
  // Register an event handler
  on(eventName, callback) {
    this.event(eventName).push(callback)
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    const e = this.event(eventName)
    for (let cb of e) {
      cb()
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    // this.events[eventName] = null
    delete this.events[eventName]
  }

  event(e) {
    if (!this.events[e]) {
      this.events[e] = []
    }
    return this.events[e]
  }
}

module.exports = Events;
