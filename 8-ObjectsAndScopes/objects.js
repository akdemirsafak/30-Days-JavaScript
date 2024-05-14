// -------- OBJECTS --------

// Array,Object ve function'lar, arrow function'lar için const kullanımı önerilir.


// const person={} //empty object

// const person2={
//     name:'John',
//     age:30,
//     isAdult:true
// } // Created with values

// console.log(person2)

// console.log(person2.name) // Get values from an object
// console.log(person2['name']) // Get values from an object

//  * Creating object methods *
// const person3={
//     name:'John',
//     age:30,
//     isAdult:true,
//     greet:function(){
//         console.log(`I'm ${this.name}`)
//     }
// }
// person3.greet()

//  * Adding properties to an object *
// person3.job='Developer'
// console.log("Person 3 after job : ",person3)
// console.log(person3.job)

//  * Deleting properties from an object *
// delete person3.job
// console.log("Person 3 after deleting job : ",person3)



const person3={
    name:'John',
    age:30,
    isAdult:true
}

// Getting object keys using Object.keys
console.log(Object.keys(person3)) //name,age,isAdult

// Getting object values using Object.values
console.log(Object.values(person3)) //John,30,true

//getting object key and  values using entries

const entries= Object.entries(person3)
console.log(entries) // [['name','John'],['age',30],['isAdult',true]]

console.log(person3.hasOwnProperty('name')) // Bu obje bu property'e sahip mi?