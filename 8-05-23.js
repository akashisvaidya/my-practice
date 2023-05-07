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
///////////////////////////////////

function calculateYears(principle, interest, tax, desired) {
  /// we have make  p >= d
  // if p is alreat greater than d then y = 0
  let years = 0;
  if (principle < desired) {
    for (let i = 1; principle <= desired; i++) {
      let interestAmount = principle * interest;
      let taxAmount = interestAmount * tax;
      let intrestAfterTax = interestAmount - taxAmount;
      let newPrinciple = principle + intrestAfterTax;
      principle = newPrinciple;
      years = i;
      //   console.log(interest, tax, np);
      console.log(j);
    }
    return years;
  } else return 0;
}

console.log(calculateYears(1000, 0.01625, 0.18, 1200));
