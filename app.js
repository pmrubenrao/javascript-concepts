const arr = [123, 321, 345];

const obj = arr.reduce((prev, next) => {
  const id = next;
  console.log(prev);
  prev[id] = next;
  // console.log(prev);
  return prev;
}, {});

console.log(obj);
