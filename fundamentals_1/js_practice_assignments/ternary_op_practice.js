//Question 1:
//Write a ternary operator that assigns the value "Even" to the variable result if the number num is even, and "Odd" if it's odd.

const number = 9;

const isEven = (number % 2) === 0 ? console.log("Even") : console.log("Odd");

//Question 2
//rewrite the following as a ternary operator

// let age = 18;
// let message;

// if (age >= 18) {
//   message = "You are eligible to vote.";
// } else {
//   message = "You are not eligible to vote.";
// }

let age = 16;
const message =  age >= 18 ? console.log("You are eligible to vote") : console.log("You are not eligible to vote");


//Question 3
//Write a ternary operator to check if a given number x is positive, negative, or zero. Assign the value "Positive" if x is greater than 0, "Negative" if x is less than 0, and "Zero" if x is equal to 0.

const number1 = -678;

const isPositive = number1 > 0 ? console.log(`${number1} is a positive number`): number1 === 0 ? console.log(`${number1} is zero`) : console.log(`${number1} is a negative number`);


//Question 4
//Write a ternary operator that checks if a person's gender is "Male" or "Female". If it's "Male", assign the string "Mr." to the variable prefix, otherwise assign "Ms.".

const person = 'female';

console.log(`${person === 'male' ? 'Mr' : 'Ms'} Smith is a female.`);

//Question 5
//Write a ternary operator to assign the string "Full" to the variable status if the capacity of a room is greater than or equal to 50, otherwise assign "Available".

const capacity = "7";

console.log(capacity >= 50 ? 'Full' : 'Available');


