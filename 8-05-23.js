/* 
In this kata you will create a function that takes a 
list of non-negative integers and strings and 
returns a new list with the strings filtered out.


*/
function filter_list(l) {
  // Return a new array with the strings filtered out
  const result = l.filter((n) => typeof n == "number");
  return result;
}

console.log(filter_list([1, 2, "a"]));
///////////////////////////////////////////////////////////

// ...

function highAndLow(numbers) {
  numbers = numbers.split(" ").map(Number);
  console.log(numbers);
  //   return Math.max(...numbers) + " " + Math.min(...numbers);
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

console.log(highAndLow("1 2 3 4 5"));
