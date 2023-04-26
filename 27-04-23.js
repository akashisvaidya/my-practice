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

const solution = (str, ending) => str.endsWith(ending);

//

function solution(str, ending) {
  if (typeof str != "string" || typeof ending != "string") throw "wrong type";

  if (ending.length > str.length) return false;
  return str.substr(str.length - ending.length, ending.length) == ending;
}
// in the above example str.substr(str.length - ending.length, ending.length) is
// used to extract a substring of str starting from the position that is ending.length characters
// away from the end of str. This is done by calculating the starting index as
// str.length - ending.length and specifying the length of the substring as ending.length
