const monthlyRent = 500; // const cannot be used e.g. const monthlyRent = 100
 
const yearlyRent = monthlyRent * 12;
console.log(yearlyRent);
 
const fullname = "Naasir Osman" // Naasir Osman is the string, fullname is the variable
console.log(fullname)
 
const firstName = "Naasir";
const lastName = "Osman";
 
const sentenceWithTemplate = `Hello ${firstName} ${lastName}! How are you!?`;
 
console.log(sentenceWithTemplate);
 
//you can put variable inside a string if you use ` ` is and ${variable} is used
 
//booleans are used in true and false scenarios

const lightison = true;
 
if (lightison) {
 console.log("The light is on!");
} else {
 console.log("The light is off");
}
 
// control flows are used for if/else statements
 
const weather = 27;
 
if (weather >= 30) { //use === to ask if its equal. use !== to ask if its not equal to
   console.log(`It is hot today. It is ${weather} degrees today`);
} else if (weather > 15) {
   console.log(`It is fine today, It is ${weather} degrees today`);
} else {
   console.log(`It is cold today. It is only ${weather} degrees today`);
}
 
//loops are const which can be changed (let)
 
let friendsAtYourParty = 0;
while (friendsAtYourParty < 10) {
 friendsAtYourParty = friendsAtYourParty + 1;
} //i.e. add 1 until it reaches 10
console.log(friendsAtYourParty);
 
const mybirthday = 20220890;
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
  
   for (let k = 0; k < timestorepeat; k++) { // for loops run the line multiple times depending on the condition (timestirepeat)
      answer = answer + charachter;
   }
 console.log(answer);
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
 
 //constants inside a function cannot be used outside (they are out of scope)
 function blah(number) {
    const something = "Cuppa coffee"
    return number + 5
    console.log(something);
 }

  // on this line " console.log(something); " //this will not show because it is out of scope
console.log(blah(2))



 let Brian = 'yellow';

 function addfive(number) {
     Brian = 'red';
    return number + 5; 
}

 console.log(Brian);

 const series = 'a';
   const episodes = 20;
   let get = '';
  
   for (let k = 0; k < timestorepeat; k++) { 
       answer += charachter
       const goal = "green"
   }

   // console.log(goal) // this work as "goal" is inside another loop/scope
const demo = "UNIindiDNIiiBDIbdbBibBib"

console.log(demo.toLowerCase())

// use "bla".


//objects

 
const person = {
    age: "28",                 //these are objects
    height: "180cm",
    location: {
        city: "London",
        country: "England", },
    weight: "86kg",
}

console.log(person.height)
console.log(person.location.city)
console.log(person.age)
console.log(person.location)
console.log(person)

//context

const Helen = {
    age: "37",             
    height: "160cm",
    location: {
        city: "Edinburgh",
        country: "Scotland",
        street: "First Street",
        postcode: "SC12 LAH" },
    weight: "62kg",

    getAddress () { 
        return `${this.location.street}, ${this.location.postcode}, ${this.location.city}, ${this.location.country}`
    } //context is using "this" to refer to its scope

}
console.log(Helen.getAddress())


//arrays

const daysOfTheWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ]
  console.log(daysOfTheWeek);
  console.log(daysOfTheWeek[0]);
  console.log(daysOfTheWeek[1]);
  console.log(daysOfTheWeek[6]);

  console.log(daysOfTheWeek.join("-"))

  daysOfTheWeek.push("Oneday");
  console.log(daysOfTheWeek) //why aint this working

let x = 2;
let y = 5;
// console.log(x -= y);
// console.log(x = x - y);
console.log(x)
console.log(x += y); // the equals after +/- reassignes x
console.log(x);
console.log(x, 'nico')