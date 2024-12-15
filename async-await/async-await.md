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
