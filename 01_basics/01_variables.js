const accountId = 51220031
let accountEmail = "hero@gmail.com"
var accountPassword = "iron"
aacountCity = "Varanasi"
// accountId =5122031 not allowed
accountEmail ="jaadu@gmail.com"
accountPassword = "234561"
/*
Prefer not to use var beacuse of 
issues in block scope and functional scope
*/
aacountCity = "Jaipur"
let accountState;

// console.log(accountId);
console.table([accountId,accountEmail,accountPassword,aacountCity,accountState])
