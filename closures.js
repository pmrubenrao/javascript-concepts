function outerFunction() {
  let outerVariable = 'I am Outside buddy';
  function innerFunction() {
    console.log(outerVariable);
  }
  return innerFunction;
}

const closure = outerFunction();
console.log(typeof closure);
closure();

function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
