var events = require('events');
var eventEmitter = new events.EventEmitter();

// create an event handler
var myEventHandler = function() {
  console.log("i hear a scream");
};

// assign the event handler to an event
eventEmitter.on('scream', myEventHandler);

// fire the 'scream' event
eventEmitter.emit('scream');
