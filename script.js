// Part 1: Math Problems
// Math is hard, which is why we have the computer solve the math problems for us. Often in programming, you will need to determine the logic behind an operation, and then tell the computer how to do it. Once you have established that logic, it can be reused. This is how we handle repetitive tasks.
// For example, consider the following problem:
// We have four numbers that need to add up to 50. At least two of these numbers must be odd. No number can be larger than 25, and each number must be unique.


// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

  //===============================================================================

  // check if all numbers are divisible by 5.

  const isDivisibleBy5 = n1 % 5 == 0 && n2 % 5 == 0 && n3 % 5 == 0 && n4 % 5 == 0;
  
  // check if the first number is larger than the last

  const isFirstNumberLarger = n1 > n4;

  //Accomplish the following arithmetic chain:
//Subtract the first number from the second number.

const arithmeticChain1 = n1 - n2;

//Multiply the result by the third number.

const arithmeticChain2 = arithmeticChain1 * n3;

//Find the remainder of dividing the result by the fourth number.

const arithmeticChain3 = arithmeticChain2 % n4;

console.log(arithmeticChain3);


// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons. Rename the variable as appropriate.

const isUnder25 = n1 < 25 && n2 < 25 && n3 < 25 && n4 < 25;

/*Part 2: Practical Math
Let’s look at a more practical scenario.
You are planning a cross-country road trip!

The distance of the trip, in total, is 1,500 miles.
Your car’s fuel efficiency is as follows:
At 55 miles per hour, you get 30 miles per gallon.
At 60 miles per hour, you get 28 miles per gallon.
At 75 miles per hour, you get 23 miles per gallon.
You have a fuel budget of $175.
The average cost of fuel is $3 per gallon.
*/

const distance = 1500;
const budget = 175;
const fuelCost = 3;
const gallonsOfFuel = budget / fuelCost;

// How many gallons of fuel we need for the entire trip on certain speed
const fuelPerHour55 = distance / 30;
const fuelPerHour60 = distance / 28;
const fuelPerHour75 = distance / 23;

// Is the budget will be enough to cover the fuel expense?

const costForTrip55 = fuelPerHour55 * fuelCost;
const costForTrip60 = fuelPerHour60 * fuelCost;
const costForTrip75 = fuelPerHour75 * fuelCost;


// How long will the trip take in hours?

const timeForTrip55 = distance / 55;
const timeForTrip60 = distance / 60;
const timeForTrip75 = distance / 75;

if(costForTrip55 <= budget){
  console.log(`Traveling at speed of 55 is withing your budget! You will spend $ ${costForTrip55}`)
}else{
  console.log(`You won't have enough money at this speed! Your cost will be$ ${costForTrip55}`);
}

if(costForTrip60 <= budget){
  console.log(`Traveling at speed of 60 is withing your budget! You will spend $ ${costForTrip60}`)
}else{
  console.log(`You won't have enough money at this speed! Your cost will be$ ${costForTrip60}`);
}
if(costForTrip75 <= budget){
  console.log(`Traveling at speed of 75 is withing your budget! You will spend $ ${costForTrip75}`)
}else{
  console.log(`You won't have enough money at this speed! Your cost will be $ ${costForTrip75}`);
}