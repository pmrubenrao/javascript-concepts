# Understanding uncaughtException

## Definition:

When an error (or exception) occurs during the execution of your Node.js application, and the application does not handle it (e.g., with a try-catch block or .catch() for Promises), this ## error is said to "bubble back to the event loop."
At this point, the uncaughtException event is emitted.

Default Behavior:  
If no listener (callback function) is attached to handle the uncaughtException event, Node.js logs the exception (producing a stack trace) and then terminates the process.

### Example:

No listener for uncaughtException

```js
throw new Error('Something went wrong!');`
```

#### Output

```js
Error: Something went wrong!
    at Object.<anonymous> (/path/to/file.js:2:7)
    at Module._compile (internal/modules/cjs/loader.js:1063:30)
    ...
Process exited with code 1`
```

#### Behavior with a Listener:

If you add a listener to the uncaughtException event, the default behavior of terminating the process is overridden. Your listener gets invoked with the error object, allowing you to handle or log the error programmatically.
Example:

```js
process.on('uncaughtException', (err) => {
  console.error('Caught exception:', err.message);
});
throw new Error('Something went wrong!');
```

Output:

```js
Caught exception: Something went wrong!
```

### Implications of Overriding Default Behavior

#### Handling Logic:

Adding a listener allows you to define custom logic, such as logging errors, cleaning up resources, or attempting recovery.
However, it is generally not recommended to continue running the application after an uncaught exception, as the application state may be inconsistent or corrupted.
Example of graceful shutdown:

```js
process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err.message);
  console.error('Stack:', err.stack);

  // Clean up resources before exiting
  console.log('Performing cleanup...');
  process.exit(1); // Exit after cleanup
});

throw new Error('Critical failure!');
```

#### Best Practices:

Instead of relying on uncaughtException, handle exceptions locally wherever possible using:

1. `try-catch for synchronous errors.`
2. `.catch() for Promise rejections.`

Use uncaughtException only for logging or emergency cleanup before shutting down the process.

#### Key Takeaways

1. The uncaughtException event acts as a last resort for handling unhandled exceptions.
2. By default, unhandled exceptions result in a stack trace and process termination.
3. Adding a listener prevents termination and gives you control over how to respond, but it should typically lead to an orderly shutdown, not a continuation of the application.

This ensures that the application remains robust and prevents undefined behavior due to unhandled errors.
