## What is an EventEmitter in Node.js?

`Answer`: EventEmitter is a core class in Node.js that provides a mechanism to handle events in an event-driven architecture.

It allows objects to emit events and listen for them asynchronously. It forms the backbone of several core modules, such as HTTP, Streams, and Timers.

## How do you create and use a custom EventEmitter?

`Answer`: You can create a custom EventEmitter by importing the events module and using the EventEmitter class. Here’s an example:

```javascript
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// Attach a listener
myEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

// Emit the event
myEmitter.emit('greet', 'Alice');
```

Output:

```plaintext
Hello, Alice!
```

## What is the difference between on and once methods?

`Answer`:

`on`: Attaches a listener that executes every time the event is emitted.

`once`: Attaches a listener that executes only the first time the event is emitted and is then automatically removed.
Example:

```javascript
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('event', () => console.log('on: Event received'));
emitter.once('event', () => console.log('once: Event received'));

emitter.emit('event');
emitter.emit('event');
```

Output:

```plaintext
on: Event received
once: Event received
on: Event received
```

## What happens if you emit an event with no listeners attached?

`Answer`: If an event is emitted and no listeners are attached:

For most events, nothing happens.
If the event is error and no listener is attached, Node.js throws an uncaught error and the process may crash.
Example:

```javascript
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.emit('nonExistentEvent'); // Nothing happens

// Error case
emitter.emit('error', new Error('No listener for error')); // Throws an uncaught error
```

## How would you handle an error event in EventEmitter?

`Answer`: You should always attach a listener to the error event to handle errors gracefully.

Example:

```javascript
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('error', (err) => {
  console.error(`Error occurred: ${err.message}`);
});

emitter.emit('error', new Error('Something went wrong!'));
```

Output:

```plaintext
Error occurred: Something went wrong!
```

## What is the significance of setMaxListeners in EventEmitter?

`Answer`: By default, an EventEmitter allows up to 10 listeners for a single event. Exceeding this limit triggers a warning about potential memory leaks. You can increase the limit using setMaxListeners.

Example:

```javascript
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.setMaxListeners(15); // Increase listener limit
console.log(emitter.getMaxListeners()); // Outputs: 15
```

## Can an EventEmitter emit multiple events simultaneously?

`Answer`: No, emit is synchronous. Events are emitted one at a time, and listeners execute sequentially in the order they were registered. However, listeners can perform asynchronous tasks.

Example:

```javascript
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('event', () => console.log('Event 1'));
emitter.on('event', () => console.log('Event 2'));

emitter.emit('event');
```

Output:

```plaintext
Event 1
Event 2
```

## Write a program where multiple listeners are attached to a single event.

`Answer`:

```javascript
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('greet', (name) => console.log(`Hello, ${name}!`));
emitter.on('greet', () => console.log('Welcome to the event system!'));

emitter.emit('greet', 'Alice');
```

Output:

```plaintext
Hello, Alice!
Welcome to the event system!
```
