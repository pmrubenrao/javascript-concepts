# setTimeout()

## Definition:

`setTimeout()` schedules a function to execute after a specified delay (in milliseconds). It does not guarantee exact timing, as execution depends on the event loop's state.

## Key Points:

Accepts two parameters: a callback and a delay.
The delay specifies the minimum time before the callback is executed.
Example:

```js
setTimeout(() => {
  console.log('Executed after 2 seconds.');
}, 2000);
```

# clearTimeout()

## Definition:

`clearTimeout()` is used to cancel a timeout created by setTimeout() if the function hasn't yet executed.

## Key Points:

Requires the timeout ID returned by setTimeout().
Prevents unnecessary code execution.
Example:

```js
const timeoutId = setTimeout(() => {
  console.log('This will not execute.');
}, 2000);

// Cancel the timeout
clearTimeout(timeoutId);
```
