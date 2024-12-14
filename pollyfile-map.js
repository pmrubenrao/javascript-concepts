const arr = [1, 2, 3, 4, 5];

const modifiedarr = arr.map((e, index, array) => {
  // console.log(e, index, array);
  return e + e;
});

console.log(modifiedarr);

Array.prototype.customMap = function (callback) {
  if (typeof callback != 'function') {
    throw new TypeError('callback function should be of type function');
  }

  let output = [];

  for (let i = 0; i < this.length; i++) {
    let ans = callback(this[i], i, this);
    output.push(ans);
  }

  console.log('this:', this);

  return output;
};

const modifedArray = arr.customMap((e, index, array) => {
  return e + e;
});

console.log('Final output', modifedArray);
