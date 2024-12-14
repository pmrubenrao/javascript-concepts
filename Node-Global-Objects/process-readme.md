# Node.js — Process

Despite being specified in the process module, the process object in Node.js is globally accessible.

It is an instance of the class EventEmitter. Details about the active Node.js process are available through the process object.
The current Node.js process can be managed using a variety of methods and properties connected to this object.

## Process Events

The following events are emitted by the process object, which is an instance of EventEmitter:

Event & Synopsis

1. `exit`: released just before the process ends. The process will terminate after all exit listeners have completed their operations, and there is currently no way to stop the event loop from ending.

2. `beforeExit`: When a node has finished scheduling events and has emptied its event loop, this event is released. Normally, the node ends when no work is scheduled, but it is possible to keep the node running by listening for the ‘beforeExit’ event and making asynchronous calls.

3. `uncaughtException`: released at the occurrence of an exception that bubbles back to the event loop. The default behavior of this exception is to produce a stack trace and exit; if a listener is added, this behavior will not happen.

4. `warning`: Anytime a process warning is released by Node.js, the ‘warning’ event is released. Because it alerts the user to extraordinary conditions, a process warning and an error share comparable characteristics.

5. `Signal Events`: released whenever a signal, such as SIGINT, SIGHUP, etc., is received by the process.

#### Example:

```js
// 1. Accessing system information
console.log(`Memory usage: ${process.memoryUsage().heapUsed} bytes`);
// Output example: Memory usage: 4236288 bytes

// 2. Managing environment variables
console.log(`Current NODE_ENV: ${process.env.NODE_ENV}`);
// Output example: Current NODE_ENV: development
process.env.MY_VARIABLE = 'Hello, World!';
console.log(`MY_VARIABLE: ${process.env.MY_VARIABLE}`);
// Output example: MY_VARIABLE: Hello, World!

// 3. Handling command line arguments
console.log(`Arguments passed to the script: ${process.argv.slice(2)}`);
// Output example (when running: node script.js arg1 arg2):
// Arguments passed to the script: arg1,arg2

// 4. Process control
process.on('SIGTERM', () => {
  console.log('Process is terminating.');
  process.exit(0);
});
// Output example: (When receiving SIGTERM signal) Process is terminating.

// 5. Event handling
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1);
});
// Output example: (When an uncaught exception occurs)
// Uncaught Exception: Error: Intentionally thrown error

// 6. Accessing standard I/O streams
process.stdout.write('This is a message written directly to stdout.\n');
// Output: This is a message written directly to stdout.

// Printing current working directory
console.log(`Current working directory: ${process.cwd()}`);
// Output example: Current working directory: /home/user/projects/node-app

// Printing process ID
console.log(`Process ID: ${process.pid}`);
// Output example: Process ID: 12345

process.on('beforeExit', (code) => {
  console.log('A beforeExit event occured with code: ', code);
});

process.on('exit', (code) => {
  console.log('Process exit event with code: ', code);
});

console.log('This message is displayed first.');

const abortfunction = () => {
  console.log('Start...');

  // It prints the message after every 1 second
  setInterval(function () {
    return console.log('Hello World');
  }, 1000);

  // It calls process.abort() after 5 seconds
  setTimeout(function () {
    return process.abort();
  }, 5000);
};

abortfunction();
```
