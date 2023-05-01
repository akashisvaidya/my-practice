/* 
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.



*/

function positiveSum(arr) {
  let result = 0;
  for (let i = 0; i <= arr.length; i++) {
    // console.log(i);
    if (arr[i] > 0) {
      //   console.log(arr[i]);
      result += arr[i];
    }
  }
  return result;
}
console.log(positiveSum([-1, 2, 3, 4, -5]));
///________________
//using reduce method
function povSum(arr) {
  return arr.reduce((a, c) => a + (c > 0 ? c : 0), 0);
}

console.log(povSum([-1, 2, 3, 4, -5]));
