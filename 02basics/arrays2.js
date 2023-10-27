const team1 = ["MS", "Virat" , "Rohit"]
const team2 = ["Shikhar" , "KL" , "Bhuvi"]

//team1.push(team2)
//console.log(team1);
//console.log(team1[3][1]);

//const team3 = team1.concat(team2)
//console.log(team3);

const team4 = [...team1, ...team2]
console.log(team4);

const a = [1,2,3,[4,5,6],[7,8,[9]]]
console.log(a.flat(Infinity));

console.log(Array.isArray("Ritik"));
console.log(Array.from("Ritik"));
console.log(Array.from({name:"Ritik"})) // point to consider

let s1 = 100
let s2 = 200
let s3 = 300
console.log(Array.of(s1,s2,s3));