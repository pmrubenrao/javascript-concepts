const num = [1, 2, 3, 4, 5, 6, 7];

const reduceSet = num.reduce((accumulator, element, index, arr) => {
  return accumulator * element;
}, 1);

console.log(reduceSet);

Array.prototype.customReduce = function (callback, initialValue) {
  let accumulator = arguments.length >= 2 ? initialValue : this[0];
  let startIndex = arguments.length >= 2 ? 0 : 1;

  for (let i = startIndex; i < this.length; i++) {
    ans = callback(accumulator, this[i], i, this);
    accumulator = ans;
  }

  return accumulator;
};

const customReduceOutput = num.customReduce(
  (acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
  },
  { 1: 1 }
);

console.log(customReduceOutput);
