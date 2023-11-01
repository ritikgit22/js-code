// if
const isUserloggedin = true
const temperature = 41

if (temperature === 40){
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}

console.log("Executed.")
// < , > , <= , >= , == , != , === , !==

const score = 200

if (score > 100){
    const power = "fly"
    console.log(`user power : ${power}`);
}

//console.log(`user power : ${power}`);  ^it will not get executed because it is out of scope.
// const and let is user to execute the condition within the same scope and var is user to execute the condition out 0of the scope.


const balance = 1000

//if (balance > 500) console.log("test") , console.log("test2");   ^not a good way to write a code due to its complex readability.

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");
} else if (balance < 900) {
    console.log("less than 900");
} else {
    console.log("less than 1200");
}

const Userloggedin = true
const debitCard = true
const loggedinfromGoogle = false
const loggedinfromEmail = true

if (Userloggedin && debitCard && 2 == 2) {
    console.log("Allow to buy course.");
}

if (loggedinfromGoogle || loggedinfromEmail) {
    console.log("User Logged In");
}

// && and || are called the logical operators. 