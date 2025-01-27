// there are two way to declare object 
// 1. Literal  2. Constructor
// there is concept of singleton -----> just remember this if you declare object like literal then it is not singelton and if declared like constructor then it is singleton
// in objects there are keys and values


// Object Literal 
const new_literal_obj_1 = {
    name : "Gayatri", // in the internal working the name, age, email, is_logged_in, last_login_days these are stored as string 
    age : 18,
    email : "gayatridhotre@gmail.com",
    is_logged_in : true,
    last_login_days : ["Monday", "Friday"],
    "Full Name" : "Gayatri DHotre"
}
// two ways to access key
console.log(new_literal_obj_1.email);
console.log(new_literal_obj_1["email"]);
// but you can't access "Full Name" using dot syntax means ----> console.log(js_user."Full Name"); .....it will generate error....you must have tio access like this
console.log(new_literal_obj_1["Full Name"]);



// there is question asked in interviews 'to declare a symbol and add that symbol in the keys of the objects and print it
const new_symbol =  Symbol("Key1")
const  new_literal_obj_2 = {
    [new_symbol] : "key2"
}
console.log(new_literal_obj_2);
console.log(new_literal_obj_2[new_symbol]);

// we can freeze an object so that whatever changes we will do with keys and values it will not reflect to the object
//Object.freeze(new_literal_obj_1) // Prevents the modification of existing property attributes and values, and prevents the addition of new properties.


