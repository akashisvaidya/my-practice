// PREP




//Complete the function/method so that it returns the url with anything after the anchor (#) removed.

//// Parameters string
//Returns- the string without the anchor and everything after that
//Example-- "www.codewars.com#about" --> "www.codewars.com"
//Pseudocode-- 
//1. check if the string contains #
//2. If yes split the string with # which will convert it to an array and then join it back.


function removeUrlAnchor(url){
  // if(url.includes("#")){
  //   return url.split("#").splice(0,1).join()
  // }
  // return url
  return url.split("#")[0]
}

console.log(removeUrlAnchor("www.codewars.com#?page=1"))