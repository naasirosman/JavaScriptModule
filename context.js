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
