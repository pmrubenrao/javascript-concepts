arr = [34, 65, 12];
let ans = [];
arr.forEach((arr) => {
  let sum = 0;
  let rem = arr;
  while (Math.floor(rem / 10) !== 0) {
    sum += rem % 10;
    rem = Math.floor(rem / 10);
  }
  console.log(sum, rem);
  ans.push(sum + rem);
});
console.log(ans.sort((a, b) => a - b));
