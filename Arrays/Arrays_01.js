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

console.log(" c : ", my_arr_1); // original array is slplited because of splice() and it will give o/p as remaingin elements of the arrayt
