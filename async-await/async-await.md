## Async await

In a JavaScript interview, explaining async/await is an opportunity to demonstrate your understanding of asynchronous programming. Here’s a structured way to explain it:

### What is async/await?

async/await is a modern way to handle asynchronous operations in JavaScript.
It provides a cleaner, more readable alternative to working with Promises, avoiding "callback hell" and making asynchronous code look more like synchronous code.

### How does it work?

#### async function:

Declares a function that always returns a Promise.
If a non-Promise value is returned, it is automatically wrapped in a Promise.

```js
async function example() {
  return 'Hello'; // Equivalent to returning Promise.resolve("Hello")
}
```

#### await keyword:

Pauses the execution of an async function until the Promise is resolved or rejected.
Must be used inside an async function.

```js
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  console.log(data); // Executes only after the above promises are resolved.
}
```

#### Why use async/await?

- Readability: It simplifies complex Promise chains, making the code easier to understand and debug.
- Error Handling: You can use try/catch blocks to handle errors, just like synchronous code.

```js
async function getData() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) throw new Error('Network error');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
```

### Key Points to Highlight in an Interview:

#### Blocking Nature of await:

While await pauses the execution of the current function, other tasks in the event loop continue to run.

Example:

```js
async function demo() {
    console.log("Start");
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("End");
}
demo();
console.log("Running other code...");

//Output:
sql
Copy code
Start
Running other code...
End
```

#### Parallel Execution with Promise.all:

To run multiple asynchronous operations concurrently, use Promise.all instead of multiple await.

```js
async function parallel() {
  const [data1, data2] = await Promise.all([
    fetch('https://api.example.com/data1'),
    fetch('https://api.example.com/data2'),
  ]);
  console.log(data1, data2);
}
```

### Error Propagation:

Rejected Promises in async functions propagate as exceptions. Use try/catch or .catch() to handle them.

#### Backward Compatibility:

Introduced in ES2017 (ES8), so older environments might need transpilers like Babel.
Potential

#### Interview Question Examples:

What happens if you don’t use await in an async function?
The Promise will still execute, but the code won't wait for it to resolve.

#### Can you use await outside an async function?

No, this will throw a syntax error. Top-level await is supported in ES2022 modules.

#### How does async/await differ from .then() chaining?

async/await is more concise and easier to read, especially for sequential operations.

### 1. Can you explain how async/await works under the hood?

Purpose of Question: Tests understanding of the JavaScript runtime and event loop.

Answer: When an async function is called, it returns a Promise.
The await keyword pauses execution of the function until the awaited Promise is resolved or rejected.
While the async function is paused, the JavaScript runtime continues to execute other tasks in the event loop.
Once the Promise settles, the function resumes execution from where it was paused.

### 2. What happens if you await a non-Promise value?

Purpose of Question: Tests attention to detail and edge case handling.

Answer:
If you await a non-Promise value, JavaScript automatically wraps it in a resolved Promise.

```js
async function example() {
  const value = await 42; // Equivalent to Promise.resolve(42)
  console.log(value); // Outputs: 42
}
example();
```

### 3. How does error handling differ between async/await and Promises?

Purpose of Question: Evaluates understanding of error propagation and handling mechanisms.

Answer:
In Promises, you handle errors with .catch():

```js
fetchData()
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
```

With async/await, you use try/catch blocks, making it easier to handle errors locally in synchronous-style code:

```js
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

Both methods propagate errors up the call stack if unhandled.

### 4. What happens if you forget the await keyword?

Purpose of Question: Tests knowledge of potential pitfalls.
Answer:
If you omit await, the async function continues execution without waiting for the Promise to resolve.

```js
async function demo() {
  const result = fetch('https://api.example.com'); // Missing await
  console.log(result); // Logs a Promise instead of the resolved value
}
```

This can lead to unexpected behavior, such as trying to use a Promise where a resolved value is expected.

### 5. How does async/await impact performance?

Purpose of Question: Explores knowledge of trade-offs.

Answer:
async/await can make code cleaner but may introduce performance bottlenecks if used improperly.
For example, using await sequentially for independent operations can slow down execution:

```js
// Slower
await task1();
await task2();
// Use Promise.all for parallel execution instead:
// Faster
await Promise.all([task1(), task2()]);
```

### 6. What is the difference between await Promise.all() and multiple await calls?

Purpose of Question: Checks knowledge of concurrency and performance optimization.

Answer:
Multiple await calls execute sequentially, waiting for each Promise to resolve before moving to the next.
Promise.all runs all Promises concurrently and resolves when all are complete.

```js
// Sequential
await fetch(url1);
await fetch(url2);

// Concurrent
await Promise.all([fetch(url1), fetch(url2)]);
```

### 7. Can you use await in a non-async function?

Purpose of Question: Tests understanding of syntax rules and top-level await.

Answer:
No, await can only be used inside an async function in older JavaScript versions.
Starting with ES2022, you can use await at the top level in a module.

```js
// Top-level await in ES2022+
const response = await fetch('https://api.example.com');
console.log(response);
```

### 8. How do you handle multiple asynchronous errors with async/await?

Purpose of Question: Evaluates practical problem-solving skills.

Answer:
Use try/catch blocks to handle errors at the function level.
For concurrent operations, wrap each in its own try/catch or use Promise.allSettled to handle errors gracefully.

```js
const results = await Promise.allSettled([
  fetch('https://api.example1.com'),
  fetch('https://api.example2.com'),
]);
results.forEach((result) => {
  if (result.status === 'fulfilled') {
    console.log('Success:', result.value);
  } else {
    console.error('Error:', result.reason);
  }
});
```

### 9. How does await affect the event loop?

Purpose of Question: Tests deeper understanding of JavaScript's asynchronous behavior.

Answer:
When await pauses an async function, the function's execution context is removed from the call stack.
This allows the event loop to process other tasks (e.g., I/O events, timers) before resuming the async function when the Promise resolves.

### 10. How does async/await differ from Generators?

Purpose of Question: Tests understanding of historical context.

Answer:
Generators (function\*) were used for asynchronous control flow before async/await.
They rely on yield to pause execution and require external tools like co to handle Promises effectively.
async/await is more intuitive and directly integrated into the language.

### 11. What happens if an error is not caught in an async function?

Purpose of Question: Tests error-handling awareness.

Answer:
If an error is not caught, the Promise returned by the async function is rejected.
You can handle the rejection with .catch():

```js
async function example() {
  throw new Error('Something went wrong');
}
example().catch((error) => console.error(error));
```
