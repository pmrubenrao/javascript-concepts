const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.emit('nonExistentEvent'); // Nothing happens

// Error case
emitter.emit('error', new Error('No listener for error')); // Throws an uncaught error
