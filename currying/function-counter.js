function fn() {
  let count = 0;

  function inner() {
    count++;
    return function (x) {
      return x === 0 ? count : inner();
    };
  }
  return inner();
}
console.log(fn()()()(0)); // Output: 3
console.log(fn()()()()(0)); // Output: 4
