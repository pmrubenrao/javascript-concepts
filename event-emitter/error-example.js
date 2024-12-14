const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('error', (err) => {
  console.error('Error occurred:${err.message}');
});

emitter.emit('error', new Error('something went wrong'));

emitter.setMaxListeners(15); // Increase listener limit
console.log(emitter.getMaxListeners()); // Outputs: 15
