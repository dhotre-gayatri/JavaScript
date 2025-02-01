const user = {
    username : "Gayatri",
    email : "dhotregayatri",
    welcome : function() {
        console.log(`${this.username} , welcome to the website `)
        console.log(this);
        
    }
}

user.username = "G"
user.welcome()

// const chai = function(){
//     user1 : "Hayatri"
//     console.log(this.user1);

// }
// chai()


const chai = () => {
    user1 : "Hayatri"
    console.log(this);
}
chai()

//arrow function ---> basic syntax of arrow function const fun_name = (parameters)=>{return parametewrs_operation}
// this is an basic arrow function know as explicit return
const addtwo= (num1, num2) => {
    return num1 + num2
}
const result = addtwo(2,3)
console.log(result);

// now lets see implicit return ----> in this we don;t need {} and 'return' -----> syntax will be const fun_name = (parameters) =>  parametewrs_operation
const addtwo1= (num1, num2) => num1 + num2
const result1 = addtwo1(2,3)
console.log(result1);

// also it has another synytax  ---> const fun_name = (parameter) => (parametere_operation)
const addtwo2 = (num1, num2) => (num1 + num2)
const result2 = addtwo2(2,3)
console.log(result2);