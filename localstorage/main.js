// // if(!localStorage.getItem("inputWords")){
// //     localStorage.setItem
// // }

// const btn = document
//   .querySelector("button")
//   .addEventListener("click", handleSubmit);

// const inputArr = [];

// function handleSubmit(event) {
//   const inputVal = document.querySelector("#inputText").value;
//   inputArr.push(inputVal);
//   console.log(inputArr);
//   //   event.preventDefault();

//   localStorage.setItem("inputWords", inputArr);
// }
// console.log(localStorage.getItem("inputWords"));

// let ulArr = [];
// ulArr.push(localStorage.getItem("inputWords"));
// console.log(ulArr);

document.querySelector("button").addEventListener("click", handleOnClick);
const displayArea = document.querySelector(".display");
let inputArr = JSON.parse(localStorage.getItem("inputArr")) || [];
if (JSON.parse(localStorage.getItem("inputArr"))) {
  console.log("yes");
  displayArea.innerHTML = inputArr.map((item) => `<li>${item}</li>`).join("\n");
}

function handleOnClick() {
  const inputText = document.querySelector("input").value;
  if (inputText) {
    inputArr.push(inputText);

    localStorage.setItem("inputArr", JSON.stringify(inputArr));
  }

  const wordsTyped = inputArr.map((item) => `<li>${item} </li>`).join("\n");
  console.log(wordsTyped);
  displayArea.innerHTML = wordsTyped;
}
console.log(inputArr);
