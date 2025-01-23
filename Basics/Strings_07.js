const name = " Gayatri"
const repo_count = 3

// Syntax of String Interpolation : console.log(`${variable_name}`)
console.log(`Hello my name is ${name} and my repo count is ${repo_count}`);


// Another way to declare String
const game_name = new String('Gayatri')
// accessing string index wise
console.log(game_name[0])
console.log(game_name[1])
console.log(game_name[2])
console.log(game_name[3])
console.log(game_name[4])
console.log(game_name[5])

// inbuilt strings

console.log(game_name.toLowerCase());
console.log(game_name.toUpperCase());

// to get to know at certain position which character it is we use charAt();
// to get to know  a certain character position we use indexOf('');

console.log(game_name.charAt(3));
console.log(game_name.indexOf('y'));

// to get a sub string from whole string we use substring(startIndex, endIndex)
console.log(game_name.substring(2,6));

// slicing string special thing about this is we can provide this negative numbers to reverse the string
console.log(game_name.slice(-8,5));

// trim characters in the string by using trim(start,end);
const str = new String("     Ramesh    ")
console.log(str.trim(' '));

// replace character with another character by using replace('new value', 'value to be replace')
const str1 = new String("https://gayatri.com/gayatri%20dhotre")
console.log(str1.replace('%20', '_'));

// we can check specific element or substring present or not 
console.log(str1.includes('gayatri'));

// The split() method of String values takes a devider to divides this string into an ordered list of substrings
 const new_1 = new String( 'The quick brown fox jumps over the lazy dog.') 
 const words = new_1.split(' ');
 console.log(words[4]); // ---> expected output is 'jumps'
 