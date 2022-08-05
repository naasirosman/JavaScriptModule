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
<<<<<<< HEAD
    
    else { console.log('my birthday has passed') } 

    //for loops
    
let friendsAtYourHouse = 0;
<<<<<<< HEAD
 for (let i = 0; i <= 10; i++) {
 friendsAtYourHouse++;
}
 console.log(friendsAtYourHouse);

const charachter = 'a';
    const timestorepeat = 20;
    let answer = '';
    
    for (let k = 0; k < timestorepeat; k++) { //however much this is, in this case 20, it runs the next line 20 times
        answer += charachter
    }


    //functions

    function addTwo(number) {
        return number + 2;
      }
      
      const finalAnswer = addTwo(5);
      console.log(finalAnswer);

//calculate celcius using function
    const fahrenheit = 70

    function toCelsius(number) {
        return (number - 32) * 5 / 9;
    }

    const celcius = toCelsius (fahrenheit);
    let aroundCelcius = Math.round(celcius);
    console.log (`${fahrenheit} fahrenheit is around ${aroundCelcius} degrees celcius`);

    //you can also use a function to call upon a specific piece of text

    function laptop() {
        return "MacBook Pro 2019 M1"
    }
    const laptopName = laptop()
    console.log(laptopName)

    //scope

=======
    
    else { console.log('my birthday has passed') } 
>>>>>>> 2cdbafe082a4320bc8c235f5eeb185867cd60d17
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

    //for loops
    
let friendsAtYourHouse = 0;
 for (let i = 0; i <= 10; i++) {
 friendsAtYourHouse++;
}
 console.log(friendsAtYourHouse);

const charachter = 'a';
    const timestorepeat = 20;
    let answer = '';
    
    for (let k = 0; k < timestorepeat; k++) { //however much this is, in this case 20, it runs the next line 20 times
        answer += charachter
    }


    //functions

    function addTwo(number) {
        return number + 2;
      }
      
      const finalAnswer = addTwo(5);
      console.log(finalAnswer);

//calculate celcius using function
    const fahrenheit = 70

    function toCelsius(number) {
        return (number - 32) * 5 / 9;
    }

    const celcius = toCelsius (fahrenheit);
    let aroundCelcius = Math.round(celcius);
    console.log (`${fahrenheit} fahrenheit is around ${aroundCelcius} degrees celcius`);

    //you can also use a function to call upon a specific piece of text

    function laptop() {
        return "MacBook Pro 2019 M1"
    }
    const laptopName = laptop()
    console.log(laptopName)

    //scope

=======
    for (let i = 0; i <= 10; i++) {
      friendsAtYourHouse++;
    }
    console.log(friendsAtYourHouse);
>>>>>>> 338b3af0d276185e4db9d5fb593688f2322812b4
