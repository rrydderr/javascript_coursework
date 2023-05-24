
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

//Question 6
//Write a ternary operator to determine whether a given year year is a leap year. Assign the value "Leap year" to the variable result if it's a leap year, and "Not a leap year" otherwise.
//(Hint: A leap year is divisible by 4, but not divisible by 100 unless it's also divisible by 400.)

const year = 2012;

console.log(((year % 4) === 0 && (year % 100) ===!0) || ((year % 4)=== 0 && (year % 100) === 0 && (year % 400)===0) ? 'Leap Year' : 'Not a Leap Year');


//Question 7
//rewrite the following using a ternary operator:

// let num1 = 10;
// let num2 = 5;
// let result;

// if (num1 > num2) {
//   result = "Num1 is greater than Num2";
// } else if (num1 < num2) {
//   result = "Num1 is less than Num2";
// } else {
//   result = "Num1 is equal to Num2";
// }

const num1 = 26;
const num2 = 15; 

const result = console.log(num1> num2 ? 'Num1 is greater than Num2' : num2 > num1 ? 'Num1 is less than Num 2' : 'Num1 is equal to Num2');



//Question 8
//Write a ternary operator that checks if a given string str is palindrome or not. Assign the value "Palindrome" to the variable result if it's a palindrome, and "Not a palindrome" otherwise.
// (Hint: A palindrome is a word or phrase that reads the same backward as forward.)

const string = 'madam';

console.log(string === string.split("").reverse().join("")? "Palindrome" : "Not Palindrome");




//Question 9
//turn the nested if else statement into a ternary operator

// let num = 12;
// let result1;

// if (num > 0) {
//   result = "Positive";
// } else {
//   if (num < 0) {
//     result = "Negative";
//   } else {
//     result = "Zero";
//   }
// }

const num = 0;

const result1 = console.log(num > 0 ? 'Positive' : num < 0 ? 'Negative' : 'Zero');


//Question 10
// Write a ternary operator to determine the grading of a student based on their score as follows:

// If the score is greater than or equal to 90, assign "A" to the variable grade.
// If the score is between 80 and 89, assign "B".
// If the score is between 70 and 79, assign "C".
// If the score is between 60 and 69, assign "D".
// For any other score, assign "F".

const score = 77;

const grade = console.log(score >= 90 ? 'A' : score >= 80 && score < 90 ? 'B' : score >= 70 && score < 80 ? 'C' : score >= 60 && score < 70 ? 'D' : 'F');


