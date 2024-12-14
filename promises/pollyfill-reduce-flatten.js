const arr = [[1, 2], 2, [3, 4, 5], [1]];

Array.prototype.flatten = function (callback, initialValue) {
  let acc = initialValue;
  for (let i = 0; i < this.length; i++) {
    let ans = callback(acc, this[i], this);
    console.log(ans);
    acc = ans;
  }
  return acc;
};

const flattenedArray = arr.flatten((acc, e, arr) => {
  console.log('im callback:', e);

  return acc.concat(e);
}, []);

console.log(arr, flattenedArray);
