// name = "Ryder"
// temperature = 19;

// console.log("Hello " + name);
// console.log("It is " + temperature + " degrees outside.");


//Fundamentals Practice
//Values and Variables

const country = "The United Kingdom";
const continent = "Europe";
let population = "10000000000"

console.log("I live in a country called " + country + " which is in " + continent + " and has a population of " + population + ".");

//Data Types + let, const and var

let isIsland = country;
isIsland = false;

let language = 'English';

console.log(typeof isIsland);
console.log(typeof country);
console.log(typeof continent);
console.log(typeof population);

//basic operators
console.log("The population of half of " + country + " is " + (population/2) + ".");

console.log("The population of " + country + " is " + (population + 1)+ ".");

const finland = "Finland";
const populationOfFinland = 6000000;

if(populationOfFinland > population){
    console.log(finland + " has a higher population than " + country + ".");
} else if ( populationOfFinland === population){
    console.log(finland + " and " + country + " have the same population.");
}else
console.log(finland + " has a lower population than " + country + ".");

let averagePopulation = 33000000;
if(population > averagePopulation){
    console.log(country + " has a greater population than the average country");
} else if (population === averagePopulation){
    console.log(country + " has the same population as an average country");
} else{
    console.log(country + " has a smaller population than the average country");
}

let description = country + " is in " + continent + ", and its " + population + " people speak " + language + ".";
console.log(description); 

//string templates and literals

const descriptionb = `${country} is in ${continent}, and it's ${population} people speak ${language}`;
console.log(descriptionb);

//taking decisions, if/else statements:
if (population > 33000000){
    console.log(` The population of ${country} is greater than ${averagePopulation}`);
} else {
    console.log(`${country}'s population is (${averagePopulation - population}) below average`);
}

// Taking decisions: if / else statements
if (population > 33000000){
    console.log(`${country}'s population is greater than ${averagePopulation}`);
} else {
    console.log(`${country}'s population is ${averagePopulation - population} below average`);
}

//Type conversion and coersion
