// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named iife
    console.log(`DB Connected`);
})(); // to use two iife functions we should use ; symbol between the functions

((name) => {
    console.log(`DB Connected two ${name}`);
})('ritik')

