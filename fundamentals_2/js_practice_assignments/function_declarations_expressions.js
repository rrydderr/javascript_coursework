//Function Declarations

//Question 1
function addNumbers(num1, num2){
    return num1 + num2;
}

const total = addNumbers(12, 8);
console.log(total);

//Question 2
function isEven(number){
    if (number % 2 === 0) {
        return console.log('true');
    }else {
        return console.log('false');
        }
    }

    const output = isEven(187);


//Question 3
function greet (name){
    return console.log(`Hello ${name}, how are you?`);
}

const greeting = greet("Ryder")


//Function Expressions:

//Question 1
const multiply = function(num3, num4){
    return num3 * num4;
}

const multiplication = multiply(5, 2);
console.log(multiplication);

//Question 2
const isPositive = function(num){
    if (num % 2 === 0){
        return "Positive";
    } else {
        return "Negative";
    }
}
const positivity = isPositive(8);
console.log(positivity);

//Question 3

const capitalise = function(text){
    return text.toUpperCase();
}

const capitalisation = capitalise("hello");
console.log(capitalisation);