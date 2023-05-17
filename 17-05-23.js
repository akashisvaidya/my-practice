/*
In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.

The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, one time color h then one time color a...

Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm with letters not from a to m.

You have to write a function printer_error which given a string will return the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.

The string has a length greater or equal to one and contains only letters from ato z.

*/
//PREP

//parameter - we are getting a string which contains letter from a-z , but we cant have letters that come from m, that means the no of letter we have from n-z they are counted as error
function printerError(s) {
  // your code
  //count the string character - total
  const total = s.length;
  console.log(total);
  const regexp = /[N-Z]/gi;
  const err = s.match(regexp);
  const result = err == null ? 0 : err.length;
  console.log(result);
  return result + "/" + total;
  //if the argument includes n-z count them -- error
  // return error/total
}
// return - it should return us the length of the string and the error(n-z)
//example /// "aabbccddmm" -- 0/8 bbmmddccnnww 4/12
//psuedo code
console.log(printerError("aaabbbbhaijjjmnn"));
