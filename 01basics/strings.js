const name = "ritik"
const repoCount = 22
// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count value is ${repoCount}`);

const gameName = new String('ritik=BH')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0 , 4)
console.log(newString);

const anotherString = gameName.slice(-5 , 2)
console.log(anotherString);

const newString1 = "    hitesh    "
console.log(newString1);
console.log(newString1.trim());

const url = "https://ritikkumar.com/ritik%20kumar"
console.log(url.replace('%20' , '-'))
console.log(url.includes('ombi'))
console.log(gameName.split('='))
