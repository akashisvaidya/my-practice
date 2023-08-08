//anagram detection

//PREP

//Parameters
//parameter will be a string of words


//Return
//We have to return if true or false

//Example

// "foefet" and "toffee" = true

//Psuedocode
// 1. Check if they have the same number of letters
//2. If no then return false, but if yes then 
//3. check if the number of each letters is equal on the both parameters
// 4. If yes then return true, else false


const x = "Buckethead"
const y = "DeathCubeK"
function anagram(test, original){
  // if(test.length === original.length){
    
  //   // return true
  //   let xArr = test.toLowerCase().split("").sort().join()
  //   let yArr = original.toLowerCase().split("").sort().join()
  //   console.log(xArr, yArr)
  //   if(xArr == yArr){
  //     return true
  //   }
  //   else return false
  // }
  // else return false
  
  const t = test.toLowerCase().split("").sort().join()
   const o = original.toLowerCase().split("").sort().join()
   return (t===o)? true : false
  
}
console.log(anagram(x,y))



