// Primitive 
// String , Number , Boolean , Null , undefined , Symbol , BigInt

const score = 100
const scoreValue = 100.5
const isLoggedIn = true
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherID = Symbol('123')

console.log(id === anotherID);
// Symbol is used to make the same type of values unique.
const bigNumber = 123456787654321n

// Non Premitive (Reference)
// Array , Objects , Functions

const cric = ["MSD" , "Virat Kohli" , "Rohit Sharma"];
let myobj = {
    name : "Ritik" ,
    age : 22 ,
}

const myfunction = function(){
    console.log("Hello World");
}
console.log(typeof anotherID);

// link : https://262.ecma-international.org/5.1/#sec-11.4.3



// +++++++++++++++++++++++++++++++++++++ Memory +++++++++++++++++++++++++++++++++++++++

