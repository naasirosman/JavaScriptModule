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


let x = 2;
let y = 5;
// console.log(x -= y);
// console.log(x = x - y);
console.log(x)
console.log(x += y); // the equals after +/- reassignes x
console.log(x);
console.log(x, 'nico')