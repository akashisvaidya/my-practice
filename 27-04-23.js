/* Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

*/

//My solution

function solution(str, ending) {
  return str.endsWith(ending);
}

//other people -

// const solution = (str, ending) => str.endsWith(ending);

//

// function solution(str, ending) {
//   if (typeof str != "string" || typeof ending != "string") throw "wrong type";

//   if (ending.length > str.length) return false;
//   return str.substr(str.length - ending.length, ending.length) == ending;
// }
// in the above example str.substr(str.length - ending.length, ending.length) is
// used to extract a substring of str starting from the position that is ending.length characters
// away from the end of str. This is done by calculating the starting index as
// str.length - ending.length and specifying the length of the substring as ending.length

//---------------------------------------------------------------------------
/*
Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.
Task

Write a function that returns both the minimum and maximum number of the given list/array.
Examples (Input --> Output)

[1,2,3,4,5] --> [1,5]
[2334454,5] --> [5,2334454]
[1]         --> [1,1]

Remarks

All arrays or lists will always have at least one element, so you don't need to check the length. Also, your function will always get an array or a list, you don't have to check for null, undefined or similar.
*/
///
// my solution
function minMax(arr) {
  let result = [];
  result.push(Math.min(...arr));
  result.push(Math.max(...arr));
  //   console.log(Math.max(...arr));
  console.log(result);
  return result; // fix me!
}
console.log(minMax([1, 2, 3, 4, 5]));

//other solutions

// function minMax(arr) {
//   return [Math.min(...arr), Math.max(...arr)];
// }

//-------------------------------------------------------------------------------------

/*
Grade book

Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
Numerical Score 	Letter Grade
90 <= score <= 100 	'A'
80 <= score < 90 	'B'
70 <= score < 80 	'C'
60 <= score < 70 	'D'
0 <= score < 60 	'F'

Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.


*/
function getGrade(s1, s2, s3) {
  // Code here

  let avg = (s1 + s2 + s3) / 2;
  console.log(avg);
  if (avg >= 90 && avg <= 100) {
    return "A";
  } else if (avg >= 80 && avg < 90) {
    return "B";
  } else if (avg >= 70 && avg < 80) {
    return "C";
  } else if (avg >= 60 && avg < 70) {
    return "D";
  } else avg >= 0 && avg < 60;
  return "F";
}

console.log(getGrade(95, 90, 93));
