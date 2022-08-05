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

if (weather >= 30) { //use === to ask if its equal. us !== to ask if its not equal to
    console.log(`It is hot today. It is ${weather} degrees today`);
} else if (weather > 15) {
    console.log(`It is fine today, It is ${weather} degrees today`);
} else {
    console.log(`It is cold today. It is only ${weather} degrees today`);
}

//loops are const which can be changed

let friendsAtYourParty = 0;
while (friendsAtYourParty < 10) {
  friendsAtYourParty = friendsAtYourParty + 1;
} //i.e. add 1 until it reaches 10
console.log(friendsAtYourParty);

const mybirthday = 20220823;
let thedate = 20220804;
const daysuntil = mybirthday - thedate
    if (thedate < mybirthday) {
        if (daysuntil < 30) {
        console.log(`There are only ${daysuntil} days until my birthday`);}

        else {console.log(`So long to go. There are ${daysuntil} days until my birthday`);
        }   }
    
    else { console.log('my birthday has passed') } 