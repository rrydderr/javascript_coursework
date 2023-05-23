//coding challenge 3

//Dolphins scores: 96, 108, 89
//Koalas scores: 88,91,110

//1. calculate the average scores for each team:
const dolphinsAvgScore = (198+91+110)/3;
console.log(dolphinsAvgScore);
const koalasAvgScore = (198+91+110)/3;
console.log(koalasAvgScore);

//compare both scores:
if (dolphinsAvgScore > koalasAvgScore) {
    console.log("The Dolphins' average score is higher than the Koalas.");
} else if (dolphinsAvgScore < koalasAvgScore) {
    console.log("The Koalas' average score is higher than the Dolphins.");
} else{
    console.log("The Dolphins and Koalas have the same average score");
}

//2. if the either teams' average score is higher than the others average score, print:
if (dolphinsAvgScore > 100 && koalasAvgScore > 100 && dolphinsAvgScore > koalasAvgScore ){
    console.log("The Dolphins have a higher average score than the Koalas.");
} else if (dolphinsAvgScore > 100 && koalasAvgScore > 100 && koalasAvgScore > dolphinsAvgScore){
    console.log("The Koala have a higher average score than the Dolphins.");
} else if ( dolphinsAvgScore > 100 && koalasAvgScore < 100) {
    console.log("The Koalas have not met the requirements for an average score.");
} else if ( dolphinsAvgScore < 100 && koalasAvgScore > 100) {
    console.log("The Dolphins have not met the requirements for an average score.");
} else {
    console.log("Neither team has met the requirements for an average score.");
}

//3. if the scores are equal, print "The teams are equal."
if (dolphinsAvgScore > 100 && koalasAvgScore > 100 && dolphinsAvgScore > koalasAvgScore ){
    console.log("The Dolphins have a higher average score than the Koalas.");
} else if (dolphinsAvgScore > 100 && koalasAvgScore > 100 && koalasAvgScore > dolphinsAvgScore){
    console.log("The Koala have a higher average score than the Dolphins.");
} else if (dolphinsAvgScore > 100 && koalasAvgScore > 100 && koalasAvgScore === dolphinsAvgScore){
    console.log("The Koalas and Dolphins have equal average scores");
} else if ( dolphinsAvgScore > 100 && koalasAvgScore < 100) {
    console.log("The Koalas have not met the requirements for an average score.");
} else if ( dolphinsAvgScore < 100 && koalasAvgScore > 100 ) {
    console.log("The Dolphins have not met the requirements for an average score.");
} else {
    console.log("Neither team has met the requirements for an average score.");
}


//coding challenge 3.5 from switch statement video (make a switch into an if)

const day = "monday";

if (day === "monday"){
    console.log("Plan course structure");
    console.log("Go to coding meetup.");
} else if (day === "tuesday"){
    console.log("Plan presentation");
} else if (day === "wednesday" || day === "thursday") {
    console.log("Write code examples");
} else if (day === "friday"){
    console.log("Record videos");
} else if (day === "saturday" || day ==="sunday"){
    console.log("Enjoy the weekend :D");
} else {
    console.log("Not a valid day!");
}