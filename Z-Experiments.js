//this includes, const, strings, numbers, var, and functions like ++ and +=
const monthlyRent = 500; // const cannot be used e.g. const monthlyRent = 100
 
const yearlyRent = monthlyRent * 12;
console.log(yearlyRent);
 
const fullName = "Naasir Osman" // Naasir Osman is the string, fullname is the variable
console.log(fullName)
 
const firstName = "Naasir";
const lastName = "Osman";
 
const sentenceWithTemplate = `Hello ${firstName} ${lastName}! How are you!?`;
 
console.log(sentenceWithTemplate);
 
//you can put variable inside a string if you use ` ` is and ${variable} is used
// use "bla".


//const vs Var vs Let
//Var can be re-declared later in the document
//const is consistent throughout the whole document (they get sent to the top when the computer is reading the document)
//let is const in its own scope but can be redefined outside of the scope

var a; //this is a declaration
console.log(a) //prints undefined

a = 5 //this is an assignment
console.log(a) //prints 5

//increment and decrement

var thisNumber = 7
thisNumber++
console.log(thisNumber) //prints 8
thisNumber--
console.log(thisNumber) //prints 7

//+= function

var z = 12

z += 14
//z = z + 14 //these two print the same thing, works with -*/

console.log(z)

var myName = "Naasir"
var myAge = "18"

console.log(myName)

myName += myAge
console.log(myName)

var thirdLetterOfName = myName[2]
console.log(thirdLetterOfName)

var lastLetterOfName = myName[myName.length -1]
console.log(lastLetterOfName) //prints 8 because we redefined myName to Naasir18

