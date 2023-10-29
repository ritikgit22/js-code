// var c = 300
let a = 100
if (true) {
    let a = 10
    const b = 20
    console.log("Inner: " , a);
}
console.log(a);

function one(){
    const username = "ritik"

    function  two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);
    two()
}
one()

if (true){
    const username = "hitesh"
    if (username == "hitesh"){
        const website = " youtube"
        console.log(username + website);
    }
    //console.log(website);
}

//console.log(username);

//++++++++ hoisting +++++++

console.log(addone(5))
function addone(num){
    return num + 1
}


//console.log(addtwo(5))   (it will give error )
const addtwo = function(num){
    return num + 2
}
