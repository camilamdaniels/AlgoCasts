// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor() {
  	this.events = {};
  }
  // Register an event handler
  on(eventName, callback) {
  	if (!this.events.hasOwnProperty(eventName)) {
  		this.events[eventName] = [callback];
  	} 
  	else this.events[eventName].push(callback);
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
  	if (this.events.hasOwnProperty(eventName)) {
  		let cbs = this.events[eventName];
  		for (let i = 0; i < cbs.length; i++) {
  			cbs[i]();
  		}
  	}
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
  	if (this.events.hasOwnProperty(eventName)) {
  		delete this.events[eventName];
  	}
  }
}

module.exports = Events;
