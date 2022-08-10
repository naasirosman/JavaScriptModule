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

  daysOfTheWeek.push("Lastday");
  console.log(daysOfTheWeek) 

  daysOfTheWeek.unshift("Firstday") //to push it to the beginning
  daysOfTheWeek[7] = "Sunday is Funday" //overwrites
  console.log(daysOfTheWeek)
  var remove = daysOfTheWeek.pop() //removes last thing in array and stores it in the variable
  console.log(daysOfTheWeek)
  console.log(remove)
  var remove = daysOfTheWeek.shift() //removes first thing in array and stores it in the variable
  console.log(remove)
  // you can overwrite one specific thing

  const productOrders = [
        [ name = "Jack", orderNo = "1234"],
        [ name = "Mark", orderNo = "1235"]
  ];
console.log(productOrders);
productOrders[0][0] = "Jake"; //overwriting in an array inside an array
console.log(productOrders);
//console.log(productOrders.toLowerCase()); // why aint this working

// productOrders.forEach(function(productOrders) //not undertanding for each

const teams = {
  liverpool: {
    ucl: ["1994", "1996", "2001", "2005", "2011", "2019"],
    pl: ["2012", "2016", "2020"],
  },
  manU: {
    ucl: ["1999", "2002"],
    pl: ["2000", "2004", "2008", "2020"],
  }
}
var ManUFirstUCL = teams.manU.ucl[0] 
console.log(ManUFirstUCL)


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
