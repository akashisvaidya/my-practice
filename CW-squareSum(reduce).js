function squareSum(numbers){
 return numbers.reduce(function(sum,n){
    return n * n + sum
  }, 0)
}
console.log(squareSum([1,2,2]))