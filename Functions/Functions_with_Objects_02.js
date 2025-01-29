const user = {
    course : "JavaScript",
    price : 199
}
//passing object to function
function passing_obj(any_obj)
{
  console.log(`The Name of course is ${any_obj.course} and price is ${any_obj.price}`);
}

// calling an object method 1
//passing_obj(user)

// calling an method 2
passing_obj({
    course : "Python",
    price : 250
})

// we can pass arrays to function
const newArr = [11,22,33,44,55]
function passin_array(any_array){
    return any_array
}
const printing = passin_array(newArr)
console.log(printing);
