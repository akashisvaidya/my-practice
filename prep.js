//PREP

// take a numer, print form 1 to that num, if the num is div by 3 print fizz and if num div by 5 print buzz if by both print fizzbuzz

//P: num, whole,  +
//R: console
// E:

function fizzBuzz(num) {
  //loop
  //conditionals %3&5 , %3 , %5
  //console.log num or fizz, biz, fizzBuzz
  for (let i = 1; i <= num; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("fizzbuzz");
    } else if (i % 3 == 0) {
      console.log("fizz");
    } else if (i % 5 == 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(15); //1,2,fizz,4,buzz
// fizzBuzz(3); // 1,2, fizz
// fizzBuzz(15); //1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizbuzz
