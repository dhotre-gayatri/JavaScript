// here we are going to learn about how to declare object using constructor
const app_1 = new Object() // using singleton method
console.log(app_1);

const app_2 = {} // using non-singelton method
console.log(app_2);




// object inside object
const object_1 = {
    email : "gayatridhotre@gmail.com",
    full_name : {
        First_name : "Gayatri",
        Middle_name : "Ramesh",
        Last_name : "Dhotre"
    },
    phone_no :{
        dad_number : {
            name: "Ramesh",
            num : 9850999223},
        mom_number : {
            name: "Vidya",
            num : 8856050702}
    }
}
// accessing object inside object
console.log(object_1.phone_no);
console.log(object_1.phone_no.dad_number);
console.log(object_1.phone_no.mom_number.num);



// combining objects
const obj1 = { 1: "a", 2 : "b", 3 : "c"}
const obj2 = { 4 : "d", 5 : "E", 6 : "F"}
//syntax 1 of  Object.assign(obj1,obj2)
// it means here target is obj1 and source is obj2 means source is going to be  added in the taret and here obj2 is going to be added in obj1     
// syntax 2 of Object.assign({}, obj1, obj2)
// we prefer syntax 2  because using {} means it is an target and obj1,obj2 are sources and those sources are going to be added in the{ } 
const obj3 = Object.assign({}, obj1, obj2)   
console.log(obj3);

// but mostly we use spread operator
const obj4 = {...obj1,...obj2}
console.log(obj4);


// accessing only keys of an object
//console.log(Object.keys(object_1)); // the output value datatype is array
//console.log(Object.values(object_1)); // the output value datatype is array

// another method which is entries()---> creates an array of each keys and value
console.log(Object.entries(object_1));

// to check if the perticular key or property is in the object or not
console.log(object_1.hasOwnProperty("name"));
console.log(object_1.phone_no.dad_number.hasOwnProperty("name"));
console.log(object_1.hasOwnProperty("full_name"));
