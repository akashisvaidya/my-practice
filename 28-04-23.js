/* 
Find the next perfect square!
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square




*/

function findNextSquare(sq) {
  //   console.log(Math.sqrt(sq));
  let num = Math.sqrt(sq);
  if (Number.isInteger(num)) {
    // console.log(++num);

    let nextNum = ++num;
    console.log(nextNum);
    return nextNum * nextNum;
  } else {
    return -1;
  }
  // Return the next square if sq is a perfect square, -1 otherwise
  //   return -1;
}

console.log(findNextSquare(114));
// other solution
//  function findNextSquare(sq) {
//    return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
//  }

function check(n) {
  console.log(Math.sqrt(n) % 1);
  return Math.sqrt(n) % 1 ? -1 : 2;
}

console.log(check(114));
