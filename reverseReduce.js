//Arrays
//Your pokemon party order which is a list of pokemon has been leaked to Misty. Please create a function that reverses your list and prints it to the console.

const pokemon = ["poke1", "poke2", "poke3", "poke4"];

// function reverse(pokemon) {
//   for (i = pokemon.length - 1; i >= 0; i--) {
//     // console.log(pokemon[i]);
//     const temp = pokemon[i];
//     console.log(temp);
//   }
// }

// reverse(pokemon);
// console.log("hi");

function reverseParty(arr) {
  console.log(arr.reverse());
}
reverseParty(pokemon);
//Given two integer arrays a, b, both of length >= 1,
// create a program that returns true if the sum of the squares of each element in a is
//  strictly greater than the sum of the cubes of each element in b.
function compareSquareAndCube(a, b) {
  return (
    a.reduce((acc, c) => acc + c ** 2, 0) >
    b.reduce((acc, c) => acc + c ** 3, 0)
  );
}

console.log(compareSquareAndCube([1, 2, 3], [4, 5, 6]));

//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]
// [68, -1, 1, -7, 10, 10] => [-1, 10]

function isMultiple(arr) {
  return arr.filter((e, i) => e % i === 0);
}

console.log(isMultiple([22, -6, 32, 82, 9, 25]));
//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

function sumOfValues(arr) {
  return arr.reduce((acc, c) => acc + Number(c), 0);
}
console.log(sumOfValues(["5", 3, 2, "1"]));
// Variables
//You are getting ready to face Brock for the Boulder Badge.
// You want three pokemon on your team that each have evolved at least once.
//  You have bulbasaur which is at level 5 and evolves at level 16, caterpie which is at level 1 and evolves at level 7, and weedle which is at level 1 and evolves at level 7.
// Create three variables to store the number of rare candies each of your pokemon would need to evolve (rare candies increase your level by one).
//  Finally, create a fourth variable named totalCandies that sums all the rare candies you would need.

let bulbasaur = 16 - 5;
let caterpie = 7 - 1;
let weedle = 7 - 1;
let totalCandies = bulbasaur + caterpie + weedle;
// console.log(totalCandies);

//Conditionals And Functions
//You have a charmander in your party. Charmander can only battle if the temperature is above 0 degrees celcius.
// Create one function that converts a Fahrenheit value to Celcius and another fuction that tells you wheither or not charmander can battle
let celcius;

function changeTemp(f) {
  let celcius = ((f - 32) * 5) / 9;
  return celcius;
}
// console.log(changeTemp(32));
function battle(ct) {
  let cTemp = changeTemp(ct);

  if (cTemp > 0) {
    console.log("Yes, can battle");
  } else {
    console.log("Sorry, cant battle");
  }
}

battle();
//Loops
//You have joined an undeground pokemon leauge. In this league, trainers can use any number of pokemon.
// Print to the console "Pikachu I choose you" x times where x is the number of pokemon the trainer you are battling has in their party

function undegroundPokemonLeague(partySize) {
  for (let i = 1; i <= partySize; i++) {
    console.log("Pikachu I choose you.");
  }
}
