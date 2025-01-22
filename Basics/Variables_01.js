const account_id = 246
let account_email = "Dhotre@gmail.com"
var account_password = "456001" //---> mostly we don't use var because it not respect scope concept
account_city = "Kolhapur" //----> we can declare variables without using const and let but it is not good practice so it is not preferable
let accoutn_state
// account_id = 280........we have declared account_id as const means that we cannot change it
console.log(account_id );

account_email = "Gayatri@gamail.com"
console.log(account_email);

account_password = "456280"
console.log(account_password);

account_city = "Chennai"
console.log(account_city);

console.table([account_id,account_email,account_password,account_city,accoutn_state]); // console.table([]);---> gives output in table format



