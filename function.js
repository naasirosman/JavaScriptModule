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

/* for (let k = 0; k < timestorepeat; k++) { 
    answer += charachter
    const goal = "green"
} */

// console.log(goal) // this work as "goal" is inside another loop/scope
const demo = "UNIindiDNIiiBDIbdbBibBib"

console.log(demo.toLowerCase())

//madLibs game

function madLibs(noun, adjective, pastVerb, adverb) {
    var result = "";
    result += `The ${adjective} ${noun} ${pastVerb} the mouse ${adverb}`
    console.log(result)
}
madLibs("cat", "black", "ate", "quickly")
