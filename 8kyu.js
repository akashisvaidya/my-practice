/* Description 

*/
///--mySolution--///
//--bestPractice--//
////---------------------------------------------------------------------------------------------------

/*
Description:
After a hard quarter in the office you decide to get some rest on a vacation.
So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
You will need a rental car in order for you to get around in your vacation.
The manager of the car rental makes you some good offers.Every day you rent the car costs $40. 
If you rent the car for 7 or more days, you get $50 off your total. 
Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
Write a code that gives out the total amount for different days(d).
*/
///--mySolution--///
function rentalCarCost(d) {
  let total = d * 40;
  return d >= 7 ? total - 50 : d >= 3 ? total - 20 : total;
}

//--bestPractice--//
function baseCost(days, rate) {
  return days * rate;
}

function discountRate(days) {
  if (days >= 7) {
    return 50;
  } else if (days >= 3) {
    return 20;
  } else {
    return 0;
  }
}

function rentalCarCost(days) {
  return baseCost(days, 40) - discountRate(days);
}

////---------------------------------------------------------------------------------------------------

/* Description 
You are given two interior angles (in degrees) of a triangle.
Write a function to return the 3rd.
Note: only positive integers will be tested.
https://en.wikipedia.org/wiki/Triangle

*/
///--mySolution--///
function otherAngle(a, b) {
  return 180 - (a + b);
}
//--bestPractice--//
////---------------------------------------------------------------------------------------------------

/* Description 
Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
For example: month 2 (February), is part of the first quarter; month 6 (June),
is part of the second quarter; and month 11 (November), is part of the fourth quarter.

*/
///--mySolution--///
const quarter = (month) => {
  return month <= 3 ? 1 : month <= 6 ? 2 : month <= 9 ? 3 : 4;
};
//--bestPractice--//
const quarterOf = (m) => Math.ceil(m / 3);
//The Math.ceil() function always rounds up and returns the smaller integer greater than
//or equal to a given number. e.g. Math.ceil(7.004); // 8 Math.ceil(-0.95); // -0

////---------------------------------------------------------------------------------------------------
