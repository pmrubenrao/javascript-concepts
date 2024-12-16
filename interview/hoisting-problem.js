function outer() {
  let arrFn = [];
  let i;
  for (i = 0; i < 3; i++) {
    arrFn.push(function fn() {
      console.log(i);
    });
  }
  return arrFn;
}

let arrFn = outer();
console.log('nasty array: ', arrFn);
console.log('calling old function', arrFn[0]());
console.log('calling old function', arrFn[1]());
console.log('calling old function', arrFn[2]());
