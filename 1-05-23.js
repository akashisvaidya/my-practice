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

/* 
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.


*/

function twoSmall(num) {
  //   let a = Math.min(...num);
  //   let b = Math.max(...num);
  //   console.log(a, b);
  //   return a + b;
  num.sort((a, b) => a - b);
  return num[0] + num[1];
}

console.log(twoSmall([19, 5, 42, 2, 77]));

//// other soltuion
function sumTwoSmallestNumbers(numbers) {
  var [a, b] = numbers.sort((a, b) => a - b); /// destructring assignement syntax is used to assign the first two elements of the sorted array to variables a and b`
  return a + b;
}
