// control flows are used for if/else statements
 
const weather = 27;
 
if (weather >= 30) { //use === to ask if its equal. use !== to ask if its not equal to
   console.log(`It is hot today. It is ${weather} degrees today`);
} else if (weather > 15) {
   console.log(`It is fine today, It is ${weather} degrees today`);
} else {
   console.log(`It is cold today. It is only ${weather} degrees today`);
}


function normalHeight(number) {
    if (number > 160 && number < 190) { //&& (means "and") both conditions need to met
        return "you are normal height"
    }
    else {
        return "you are not normal height"
    }}
console.log(normalHeight(161))

function normalTemp(number) {
    if (number > 42 || number < 32) { //|| (means "or") one conditions need to met
        return "you are ill"
    }
    else {
        return "you are fine"
    }}
console.log(normalTemp(31))
