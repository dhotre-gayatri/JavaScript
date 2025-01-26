// array declaration type 1
const my_arr_1 = [0, 1, 2, 3, 4, 5]
console.log(my_arr_1[0]);

// array declaration type 2
const marvel_heros = ["Iron-Man", "Thor", "Captain-America", "Natasha"]
console.log(marvel_heros[1]);

// array declaration type 3
const my_arr_2 = [0, 1, 2, 3, 4, 5, "Gayatri", true, NaN]
console.log(my_arr_2[3]);

// array declaration type 4
const my_arr_3 = new Array(1,2,3,4,5)  // in this we don't give square brackets.....it will automatically give square brackets
console.log(my_arr_3);


// Methods in the array
my_arr_1.push(6) // adds valye at last
my_arr_1.push(7)
my_arr_1.push(8)
console.log(my_arr_1);

my_arr_1.pop() // removes last value
console.log(my_arr_1);

// unshift() ---> it adds given value into first place means at )th index and that is why it is very time consuming so it is not useful
my_arr_1.unshift(10)
console.log(my_arr_1);

// shift()----> it removes the first element of the array
my_arr_1.shift()
console.log(my_arr_1);

// includes(value) ----> we use it to check  whether that value is in the array or not
console.log(my_arr_1.includes(7));

// indexof(value)----> by providing value it give index no. of that value and if value is not present in array the it give -1 as o/p
console.log(my_arr_1.indexOf(7));



// Another Intresting Operation

const new_arr =  my_arr_1.join()  // ----> join() it adds the elements of array into the string means my_arr_1 array elements become string for new_arr
console.log(my_arr_1)
console.log(typeof(my_arr_1));

console.log(new_arr);
console.log(typeof(new_arr));


// slice, splice

console.log(" A : ", my_arr_1); // original array from 0 to 7
const my1 = my_arr_1.slice(1,4) // here slice means it give o/p from index 1 to 3
console.log(my1);


console.log(" B : ", my_arr_1); // original array from 0 to 7
const my2 = my_arr_1.splice(1,4) // slice and split the array here it gives o/p from index 1 to 4 
console.log(my2);

console.log(" c : ", my_arr_1); // original array is slplited because of splice() and it will give o/p as remaingin elements of the array


// more discussion on array
 const marvel_heros_1 =  ["Iron-Man", "Thor", "Captain-America", "Natasha"]
 const heros = ["Ell", "Dustin", "Will", "Hopper", "Max"]

// // what will o/p if we directly push heros to marvel heros ----> expected o/p is array inside array
// marvel_heros_1.push(heros) // it means that heros array is an single element for marvel array
// console.log(marvel_heros_1);
// console.log(marvel_heros_1[4]);


// let new_01 = marvel_heros_1.concat(heros) // Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// console.log(new_01);


// to spread out all the element from bothe array we use ...(dot dot dot) ----> ...marvel_heroes_1, ...heroes
let new_02 = [...marvel_heros_1, ...heros]
console.log(new_02);


const another_arr = [1,2,3,[4,5,6],7,[8,9,[10,11]]]
const new_03 = another_arr.flat(0)
console.log(new_03);
const new_04 = another_arr.flat(1)
console.log(new_04);
const new_05 = another_arr.flat(2)
console.log(new_05);


//isArray(variable_name OR element) ---> to check whether given variable_name or element is array or not
console.log(Array.isArray(marvel_heros_1));


console.log(Array.from("Gayatri"));// An iterable object to convert to an array......Creates an array from an iterable object.

console.log(Array.from({name : "Gayatri"})); // intresting for inteviews


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); // Returns a new array from a set of elements.