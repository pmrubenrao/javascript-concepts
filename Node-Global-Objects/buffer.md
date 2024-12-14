# Buffer

## Definition:

Buffer is a global object in Node.js used for handling binary data directly. It allows working with streams of data such as reading files or handling network packets. Buffers are fixed in size and offer an efficient way to manipulate raw data without involving a string format.

## Key Points:

1. `Buffers` are not resizable and are represented as an `array of bytes`.
2. Commonly used in `file I/O` and `network operations`.
3. Created using `Buffer.alloc(size)` or `Buffer.from(data)`.

#### Example:

```js
const buffer = Buffer.from('Hello');
console.log(buffer); // <Buffer 48 65 6c 6c 6f>
console.log(buffer.toString()); // 'Hello'
```
