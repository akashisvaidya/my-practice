//PREP

// Parameter -- we get 2 arguments that are number

//binary addition
function addBinary(a, b) {
  // add the numbers

  let sum = a + b;
  // convert the sum to the binary

  return sum.toString(2);
}

/// result => 1,1 => 10 i.e. binary of 2

console.log(addBinary(5, 9));

function testEven(n) {
  if (n % 2 === 0) {
    return true;
  } else return false;
}

console.log(testEven(9));

function testOdd(n) {
  return n % 2 === 1;
}

console.log(testOdd(1));
