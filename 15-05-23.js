function getCount(str) {
  let j = 0;
  let strArr = str.split("");
  console.log(strArr);
  for (const char of strArr) {
    if (
      (char == "a") |
      (char == "e") |
      (char == "i") |
      (char == "0") |
      (char == "u")
    ) {
      j += 1;
    }
    // if (char == "e") {
    //   j += 1;
    // }
    // if (char == "i") {
    //   j += 1;
    // }
    // if (char == "o") {
    //   j += 1;
    // }
    // if (char == "u") {
    //   j += 1;
    // }
  }

  return j;
}
console.log(getCount("abracadabra"));
