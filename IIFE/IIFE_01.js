// Immediately Invoked Function Expression (IIFE)
// to avoid global scope pollution we use IIFE ----> but what is mean by global pollution?
//global scope pollution refers to the situation where you have too many variables declared in the global scope. This can lead to several problems: Naming Collision, Reduce Code maitainablity
// here first parenthesis () is for defination and second paranthesis () is for execution
// named IIFE
(function chai(){
    console.log(`DB CONNECTED`);
    
})(); // usually it is better to give semicolon ;  and  // expected o/p ---> DB CONNECTED



// arrow function using IIFE // it is alos non-named IIFE
(() => {
    console.log(`DB CONNECTED`);
})();



// you can pass parameters like this
((name) => {
    console.log(`${name}, DB CONNECTED`);
})("Gayatri");

