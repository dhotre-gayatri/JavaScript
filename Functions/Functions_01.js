// syntax of function
function function_name(){
    // body code code for function
    console.log("Hello Function!!"); 
}
// reference name of function is function_name
// calling function for execution process synta is function_name()
function_name()

// addition of two numbers -----> function with Parameters but no return type
function add_two_num(x, y){// wehn we define function that time x , y are parameters 
   let result = x + y
   console.log("addition of two numbers is : "+result);  
}

add_two_num(5,10) // when we call function that time 5 ,10 are arguments


// function with Parameters but and return type
function add_two_num_2(a, b){
    let result = a + b
    return result  
 }
 const res = add_two_num_2(10,10)
 console.log(res);
 

 // another example of functions
 function is_logged_in(username){
    return `Yes ${username} has logged in`
 }
const check = is_logged_in("gayatridhotre28@gmail.com") // 
console.log(check);
const check_1 = is_logged_in() // if we don;t pass any value at the place of arguments then it gives result as undefined
console.log(check_1);

// to avoid undefined situation we can use condition statement
function is_logged_in_2(username){
    if(!username){
        console.log("Please enter usename!!");
        return
    }
    return `Yes ${username} has logged in`
 }
const ch_2 = is_logged_in_2() 
console.log(ch_2); 
const ch = is_logged_in_2("gayatridhotre28@gmail.com") // 
console.log(ch);


// suppose we don't know how many arguments we want to give that time we can use rest operator
function calculate(...num1){ // ...parameter it is a syntax of rest operator the syntax of spread operato is same but it is depend on when and how we use it
    return num1
}
const cal = calculate(100,200,300)
console.log(cal);

// interview question
function calculate_2(val1, val2, ...num1){
    return num1
}
const cal_2 = calculate_2(1, 2, 3, 4, 5)
console.log(cal_2);