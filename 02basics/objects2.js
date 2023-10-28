//const tinderuser = new Object() //singleton object
const tinderuser = {} //non-singleton object

tinderuser.id = "123abc"
tinderuser.name = "Sammy"
tinderuser.isloggedin = false

console.log(tinderuser);

//const regularuser = {
//    email : "reguser@gmail.com"
//        fullname : {
//        userfullname : {
//            firstname : "ritik"
//            lastname : "kumar"
//        }
//    }
//}

//console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {1:"a" , 2:"b"}
const obj2 = {3:"a" , 4:"b"}
const obj3 = {5:"a" , 6:"b"}

//const obj4 = {obj1 , obj2}
//const obj4 = Object.assign({}, obj1, obj2, obj3)
const obj4 = {...obj1 , ...obj2 , ...obj3}
console.log(obj4);

const users = [
    {
        id : 1 , 
        email : "r@gmail.com"
    },
    {
        id : 1 , 
        email : "r@gmail.com"
    },
    {
        id : 1 , 
        email : "r@gmail.com"
    },
]

users[1].email
console.log(tinderuser);
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));