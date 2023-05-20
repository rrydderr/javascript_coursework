//coding challenge 2

//extracted from coding challenge 1
const weightOfMark = 78;
const heightOfMark = 1.69;

const weightOfJohn = 92;
const heightOfJohn= 1.95;

const markBMI = weightOfMark / (heightOfMark**2);
const johnBMI = weightOfJohn / (heightOfJohn**2);

//BMI formula = mass / height**2 OR mass /(height*height)
const markHigherBMI = (markBMI > johnBMI);

//1. print an output saying who has the higher BMI
if (markHigherBMI === true){
    console.log("Mark's BMI is higher than Johns's");
} else{
    console.log("John's BMI is higher than Mark's");
}

//2. Ust templaye string to include BMI values in the logged output

if (markHigherBMI === true){
    console.log(`Mark's BMI (${markBMI}) is higher than Johns's (${johnBMI})`);
} else{
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})`);
}
