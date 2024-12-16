Array.prototype.myReduce = function (callback, index) {
  let accumulater = this[0];
  for (let i = 1; i < this.length; i++) {
    accumulater = callback(accumulater, this[i]);
    // console.log(accumulater);
  }
  return accumulater;
};

const result = [1, 2, 3].myReduce((sum, item) => sum + item);
console.log(result);
