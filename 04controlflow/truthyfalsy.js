const userEmail = "ritik@ai"

if (userEmail) {
    console.log("Got user Email.");
} else {
    console.log("'Don't have user Email.");
}

// false values -> false , 0 , -0 , bigint(0n) , "" , null , undefined , NaN
// truthy values -> true , "0" , 'false/true' , " " , [] , {} , function(){} 

if (userEmail.length === 0) {
    console.log("Array is empty.");
}

const emptyObj = {}

if (Object.keys(emptyObj).length == 0) {
    console.log("Object is empty.");
}

// false == 0 -> true
// false == '' -> true
// 0 == '' -> true


// Nullish Coalescing Operator (??) : null undefined   ^the following method is used to not stop the program due to the data unavailability. ; after the ?? there will be a function which refers to some other condition. ; data will be print over null and undefined condition. 

let val1 ; 
val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 20
val1 = null ?? 10 ?? 20

console.log(val1);



// Terniary Operator
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("more than 80") : console.log("more than 80")
