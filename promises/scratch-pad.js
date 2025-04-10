const numbers = [5, 6, 2, 3, 7];
const maxNumber = Math.max.call(null, ...numbers);
console.log(maxNumber);
