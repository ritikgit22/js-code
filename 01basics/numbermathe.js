const score = 500
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.4567
console.log(otherNumber.toPrecision(4));

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));

//  ++++++++++++++++++++ Maths +++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));  // is used to get the positive of a number.
console.log(Math.round(4.6)); // is used to round a number.
console.log(Math.ceil(4.2)); // is used to get an upper round number.
console.log(Math.floor(4.9)); // is used to get a lower round number.
console.log(Math.min( 2 , 5 , 8 , 3 )); // for minimum number.
console.log(Math.max( 9 , 7 , 4 , 5 )); // for maximum number.

console.log(Math.random());
console.log((Math.random()*10 + 1));

// The following method is used when we need a random number between a desired range.

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1))) + 1
