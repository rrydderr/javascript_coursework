//coding challenge

//1. Store Mark and John's mass in variables:

const weightOfMark = 78;
const heightOfMark = 1.69;

const weightOfJohn = 92;
const heightOfJohn= 1.95;

//2. Calculate both their BMIs : formula = mass / height**2 OR mass /(height*height)

const markBMI = weightOfMark / (heightOfMark**2);
console.log(markBMI);
const markBMI2 = weightOfMark / (heightOfMark * heightOfMark);
console.log(markBMI2);

const johnBMI = weightOfJohn / (heightOfJohn**2);
console.log(johnBMI);
const johnBMI2 = weightOfJohn / (heightOfJohn * heightOfJohn);
console.log(johnBMI2);

//3. Create boolean variable containing info about whether mark has a highter bmi than john
const markHigherBMI = (markBMI > johnBMI);
console.log(markHigherBMI);
