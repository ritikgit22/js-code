// singleton

// object literals
const mySym = Symbol("key1")


const jsuser = {
    name : "Ritik" ,
    "full name" : "Ritik Kumar",
    [mySym] : "mykey1",
    age : 20 ,
    location : Delhi ,
    Email : "ritik@gmail.com" ,
    isLoggedIn : true , 
}

console.log(jsuser.Email);
console.log(jsuser["Email"]);
console.log(jsuser["full name"])
console.log(jsuser[mySym])

jsuser.email = "ritik@chatgpt.com"
//Object.freeze(jsuser)
jsuser.email = "ritik@micro.com"
//console.log(jsuser)


jsuser.greeting = function(){
    console.log("Hello js user");
}

jsuser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
}

console.log(jsuser.greeting());
console.log(jsuser.greetingTwo());
