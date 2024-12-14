const numbers = [1, 2, 3, 4, 5, 6, 7];

const filteredNumber = numbers.filter(function (element, index, arr) {
  return element % 2 === 0;
});

console.log(filteredNumber);

Array.prototype.customFilter = function (callback) {
  let output = [];

  for (let i = 0; i < this.length; i++) {
    let ans = callback(this[i], i, this);
    if (ans) {
      output.push(this[i]);
    }
  }

  return output;
};

const customFilterOutput = numbers.customFilter(function (element, index, arr) {
  return element % 2 === 0;
});

console.log('customer filter', customFilterOutput);
