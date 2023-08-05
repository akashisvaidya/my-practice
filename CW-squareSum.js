//Complete the square sum function so that it squares each number passed into it and then sums the results together.

const numbers = [1,2,2]
function squareSum(nums){
  let sum = 0
  for(let i=0; i<nums.length; i++){
    sum += nums[i] * nums[i]
  }
  return sum
}

console.log(squareSum(numbers))