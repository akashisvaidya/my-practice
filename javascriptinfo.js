/* Write the code, one line for each action:

    Create an empty object user.
    Add the property name with the value John.
    Add the property surname with the value Smith.
    Change the value of the name to Pete.
    Remove the property name from the object.

*/
/*
let user = {};

user["name"] = "john";
user["surname"] = "Smith";
user["name"] = "Pete";
delete user["name"];
*/

/*
Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.
 */
/*
function isEmpty(obj) {
  for (key in obj) {
    return false;
  }
  return true;
}

let obj = {
  name: "Akash",
};

console.log(isEmpty(obj));

*/

/*
We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

If salaries is empty, then the result must be 0.
*/
/*
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
console.log(sum);
 */
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// function mulitply(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] === "number") {
//       obj[key] *= 2;
//     }
//   }
// }

// mulitply(menu);

// console.log(menu);

console.log("running");
let input = "turpentine and turtles.";
const vowels = ["a", "e", "i", "o", "u"];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
  // console.log(input[i])
  if (input[i] === "e") {
    resultArray.push(input[i]);
  }
  if (input[i] === "u") {
    resultArray.push(input[i]);
  }
  for (let j = 0; j < vowels.length; j++) {
    // console.log(j);
    if (input[i] === vowels[j]) {
      // console.log(input[i]);
      resultArray.push(input[i]);
    }
  }
}
console.log(resultArray);
let resultString = resultArray.join("").toUpperCase();
console.log(resultString);
