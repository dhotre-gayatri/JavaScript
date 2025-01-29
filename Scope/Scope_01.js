// here {} curly braces defines the scope

// the scope of the 'if' is strate from '{' and end at '}'
// but var dosen't undestand scope and because of that we avoid to use that 
if (true){
    let a = 10
    const b = 20
   // var c = 30    
}
// console.log(a);  // it will not print becaue a is declare inside {} so we are not able to process ouside the {}  curly braces
//console.log(b);  // it will not print becaue a is declare inside {} so we are not able to process ouside the {}  curly braces
//console.log(c); // it will print because var don;t have concept of scope and that is why we are able to process 'c' outside the curly braces {}


// whatever we write inside {} is known as block scope
// whatever we write outside {} is known as global scope 
// whatever we declare in global scope is accessible to block scope but whatever we declare at block scope is not accessible to global scope 




// nested scope
function one(){
    const username = "gayatri"
      function two(){
        const web = "youtube"
        console.log(username); // it will print because it is still inside main curly braces
      }
      // console.log(web); // it will not print because we have declare web curly bracers inside curly bracers 
      two()
}
one()

//******************************** Intresting COncept ******************************
addone(5) // if we call function before defination it will give result
function addone(num){
    return num
}
addone(5) // if we call function after defination it will give result
 



addtwo(10)  // if we call function before defination it will give error
const addtwo = function(num){
    return num
}
addtwo(10)  // if we call function after defination it will give result



