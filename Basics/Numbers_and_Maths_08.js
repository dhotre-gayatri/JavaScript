const score = 400
console.log(score);
// declareing Number type explicitly

const balance = new Number(100)
console.log(balance);


//***************************** Maths ******************

// Maths is an default library in Javascript 


console.log(Math);
// // abs is an absulute value abs(value)......Expected o/p----> 4 ... means negative values become positive
console.log(Math.abs(-4));

// // round is an function which make round of the value round(4.3)...expected o/p---> 4

console.log(Math.round(4.4));
console.log(Math.round(4.5));
console.log(Math.round(4.6));

// // ceil is also an round of function but in this if the value is little bit more then it give round of value as like example
// // if ceil(4.1)....Expected o/p---> 5  and   ceil(4.9).....Expected o/p---> 5

console.log(Math.ceil(4.4));
console.log(Math.ceil(4.5));
console.log(Math.ceil(4.6));

// // 
// // floor is also an round of function but in this if the value is little bit more then it give round of value as like example
// // if  floor(4.1)....Expected o/p---> 4  and   floor(4.9).....Expected o/p---> 4

console.log(Math.floor(4.4));
console.log(Math.floor(4.5));
console.log(Math.floor(4.6));

// // Min and Max library

console.log(Math.min(4, 2, 6, 8));
console.log(Math.max(4,2,6,8));


// random()---- the o/p value will be in between 0 and 1

console.log(Math.random());

// if you don't wanted o/p value as 0 then we can multiply random() with 10 and then add 1.....so that we get natural numbers 

console.log( (Math.random()*10) + 1);
console.log( (Math.random()*10) + 1);

// and to get round of output of random() we can use floor

console.log( Math.floor(Math.random()*10) + 1);


// also there is an trick with formula

const min = 10
const max = 20

console.log(Math.floor(Math.random()* (max -min + 1 ) + min));
