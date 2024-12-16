let a = 10;

console.log('line number 1', a);

function fn() {
  //   console.log('line number 2 ', a);
  let a = 20;
  a++;
  console.log('line number 3 ', a);
  if (a) {
    let a = 30;
    a++;
    console.log('line number 3', a);
  }
  console.log('line number 4', a);
}

fn();
console.log('line number 5', a);
