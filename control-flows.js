// control flows are used for if/else statements
 
const weather = 27;
 
if (weather >= 30) { //use === to ask if its equal. use !== to ask if its not equal to
   console.log(`It is hot today. It is ${weather} degrees today`);
} else if (weather > 15) {
   console.log(`It is fine today, It is ${weather} degrees today`);
} else {
   console.log(`It is cold today. It is only ${weather} degrees today`);
}