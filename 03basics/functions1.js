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


// function calcartprice(val1, val2, ...num1){
//     return num1
// }
// console.log(calcartprice(100,200,300,400,500))

// const user = {
//     username : "ritik",
//     price : 199
// }

// function handleobj(anyobj){
//     console.log(`username is ${anyobj.username} and the price is ${anyobj.price}`);
// }
// handleobj(anyobj)

handleobj({
    username : "sam"
    price : 299
})

const mynewarray = [100,200,300,400]
function returnsecvalue(getarray){
    return getarray[1]
}

//console.log(returnsecvalue(mynewarray));
console.log(returnsecvalue([100,200,300,400]));
