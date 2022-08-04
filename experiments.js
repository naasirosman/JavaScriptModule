const monthlyRent = 500; // const cannot be used e.g. const monthlyRent = 100

const yearlyRent = monthlyRent * 12;
console.log(yearlyRent);

const fullname = "Naasir Osman" // Naasir Osman is the string, fullname is the variable
console.log(fullname)

const firstName = "Naasir";
const lastName = "Osman";

const sentenceWithTemplate = `Hello ${firstName} ${lastName}! How are you!?`; 

console.log(sentenceWithTemplate);

//you can put variable inside a string if you use ` `is and ${variable} is used

const lightison = true; 

//booleans are used in true and false scenarios


if (lightison) {
  console.log("The light is on!");
} else {
  console.log("The light is off");
}

// control flows are used for if/else statements

const weather = 27;

if (weather) >= 30 {
    console.log(`it is hot today, it is ${weather} degrees today`)
} else {
    console.log(`it is fine today, it is only ${weather} degrees today`)
}