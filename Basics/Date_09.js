// let my_date = new Date()
// console.log(my_date);

// we can  make conversions to string

// console.log(my_date.toString());

// also we many more function like

// console.log(my_date.toDateString());
// console.log(my_date.toISOString());
// console.log(my_date.toJSON());
// console.log(my_date.toLocaleDateString());
// console.log(my_date.toLocaleString());
// console.log(my_date.toLocaleTimeString());

// type of the date

// console.log(typeof(my_date));

// we can declare specific date
//syntax can ne Date(year, month, date, hour, min, sec )
let new_created_date_1 = new Date(2023, 0, 23) // ---> Expected o/p is ---> Mon Jan 23 2023....means that months start from 0
console.log(new_created_date_1.toDateString());

let new_created_date_2 = new Date(2023, 0, 23, 5, 3) // ---> Expected o/p is ---> Mon Jan 23 2023....means that months start from 0
console.log(new_created_date_2.toLocaleString());

let new_created_date_3 = new Date("2003-11-28")
console.log(new_created_date_3.toLocaleString());

// OR

let new_created_date_4 = new Date("11-28-2003")
console.log(new_created_date_4.toLocaleString());

// move to the time stamp
// it is useful in room booking system,hotel app or pol
let my_time_stamp = Date.now()
console.log(my_time_stamp);
console.log(new_created_date_4.getTime());

// by dividing 1000 or more to Date.now() and applying floor function to (Date.now()/100) we can reduce the no. in the o/p
console.log(Math.floor(Date.now()/1000));


// let us learn more functions

let date_1 = new Date()
console.log(date_1.getDate());
console.log(date_1.getDay());
console.log(date_1.getMonth());
console.log(date_1.getMonth()+1);

// printing useing string interploation
console.log(`${date_1.getUTCMonth() + 1 } this is the month`);

