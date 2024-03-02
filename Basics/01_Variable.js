const accountId = 144553
let accountEmail = "neel557@gmail.com"
var accountPassword = "123654"
accountCity = "Gorakhpur"
let accountState;

// accountId = 2  ( not allowed)
accountEmail = "hbc@dj.com"
accountPassword = "5875249"
accountCity = "banaras"

console.log(accountId)

/*
preferred not use var
beacause of issue in block scope and funtional scope
*/
console.table([accountId, accountEmail,accountCity,accountState])