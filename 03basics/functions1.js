function myname(){
    console.log("R");
    console.log("I");
    console.log("T");
    console.log("I");
    console.log("K");
}
myname()

// function addtwonums(num1 , num2){ //num1,num2 are parameters
//     console.log(num1 + num2);
// }
//addtwonums(2 , 3) // 2,3 are arguements


// function addtwonums(num1 , num2){
//     let result = num1 + num2
//     console.log("Hitesh");
//     return result
// }
// const result = addtwonums(2 , 3)
// console.log("result: ", result);

function loginmess(username="sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginmess("Ritik")) // return is not same as console; to print something we have to use console keyword
