function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const closure = outer();
const closure2 = outer();
closure();
closure();
closure2();
