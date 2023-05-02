/* 

Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...

Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8


*/

/// The solution is mostly to do with the maths, but simple  way to crack it it if you check the rows
// for e.g. row 2 , 3 and 5, if you add three and 5 you will get 8 with is 2^3 to make it more clear
// row 3 is 7 + 9 + 11 = 27  which is 3 ^3. SO the solution is what ever the number of the row is just power it by 3, it iwll be eqaul to the sum of the numbers in the row

function sumOddNum(n) {
  return Math.pow(n, 3);
}
