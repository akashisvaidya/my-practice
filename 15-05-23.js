function getCount(str) {
  let j = 0;
  let strArr = str.split("");
  console.log(strArr);
  for (const char of strArr) {
    // console.log(char);
    if (
      char == "a" ||
      char == "e" ||
      char == "i" ||
      char == "0" ||
      char == "u"
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

function getCount2(str) {
  let vowelsCount = 0;
  for (index in str) {
    console.log(index);
    switch (str[index]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
        vowelsCount++;
        break;
    }
  }
  return vowelsCount;
}

console.log(getCount2("abracadabra"));
