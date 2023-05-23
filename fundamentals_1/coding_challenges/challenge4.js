//coding challenge 4

//tip calculator:
//if bill is between 50 and 500, the tip is 15%
// otherwise the tip is 20%

const bill = 275;

const tip = (bill > 50 && bill < 500 ? bill * 0.15 : bill * 0.2);

// console.log(`You should tip ${tip}`);

const overallPrice = bill + tip;

console.log(`The bill is £${bill} and the tip is £${tip}, so the overall price is £${overallPrice}.`);