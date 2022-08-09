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