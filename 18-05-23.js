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
function hoopCount(n) {
  return n < 10
    ? "Keep at it until you get it"
    : "Great, now move on to tricks";
}
function hoopCount(n) {
  const HOPS_LIMIT = 10;
  return n >= HOPS_LIMIT
    ? "Great, now move on to tricks"
    : "Keep at it until you get it";
}
