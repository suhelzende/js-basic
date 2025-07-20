const accountId = 1753003 // can never update 
let accountEmail = 'suhelzende@email.com' // can update 
var accountPassword = '12345612' // can update // issue with scope // prefer not to use 
accountCity = "Sangli" // can update

// declaration
let accountState

console.log('Account Details')
console.table([
    accountId,
    accountEmail,
    accountPassword,
    accountCity,
    accountState
])
// accountId = 2 // constant cannot be update -> not allowed

// update
accountEmail = 'suhel-update@email.com' // can update 
accountPassword = '12345667' // can update // issue with scope 
accountCity = "Pune"
accountState = "Maharashtra"
// print table
console.log('Account Details Updated')
console.table([
    accountId,
    accountEmail,
    accountPassword,
    accountCity,
    accountState
])