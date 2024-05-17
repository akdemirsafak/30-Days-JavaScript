// Class'lar 
// Javascript Object Oriented Programming bir dildir.
// JavaScript'te herşey property ve method'ları ile birlikte bir nesnedir.
// Nesne oluşturmak için class'ları kullanırız.
// Class'lar bir blueprint'tir ve bu blueprint'e göre nesneler oluşturulur. Class'lar bir template'dir ve bu template'e göre nesneler oluşturulur.
// Object literal is a singleton.
// Ayrıca class'lar kod tekrarının önüne geçerler.
// Class'lar ES6 ile gelmiştir.

//Defining a Classes

//Syntax : 
class ClassName  {}

//Class Constructor
//Class'lar bir constructor'a sahip olabilir ve bu constructor nesne oluşturulduğunda çalışır.

// class Person{
//     constructor(firstName,lastName){
//         this.firstName=firstName
//         this.lastName=lastName
//         console.log("You can make anything.")
//     }
// }
// const person=new Person() // Undefined name and lastname
// console.log(person)

// const secondPerson=new Person('Şafak','akdemir')
// console.log(secondPerson)

// Default value constructor
class People {
    constructor(){
        this.firstName="Tayyip"
        this.lastName="Smith",
        this.job= "Economist"
    }
    getFullName(){ // Class Methods
        return `${this.firstName} ${this.lastName} - ${this.job}`
    }
}

const people = new People()
console.log(people.getFullName())

//Properties with initial values

class Cat {
    constructor(name,age,color="White"){     
    this.name=name
    this.age=age
    this.color=color
    this.skills=[]
    }
}
const cat = new Cat('Pamuk',3);
console.log(cat)
console.log(cat.name) // property'lerine bu şekilde ulaşabiliriz.
console.log(cat.age)

// getters and setters 
// Class'lar içinde getter ve setter'lar tanımlayabiliriz.

class Car {
    constructor(brand='',model=''){
        this.brand=brand
        this.model=model
    }
    get getCarBrand(){
        return this.brand
    }
    set setCarBrand(value){
        this.brand=value
    }
    get getCarModel(){
        return this.model
    }
    set setCarModel(value){
        this.model=value
    }
    get getInfo(){
        console.log(`${this.brand} - ${this.model}`)
    }
}

const car= new Car()
car.setCarBrand="Mercedes"
car.setCarModel="C180"
console.log(car.getCarBrand)
console.log(car.getCarModel)

car.getInfo

// Static Methods
// Static methodlar class'ın prototype'ına eklenmezler. Class'ın kendisine eklenirler.


class Math {
    constructor(x=3){
        this.x=x
    }
    static cube(x){
        return x*x*x
    }
    set setX(value){
        this.x=value
    }
    get getX(){
        return this.x
    }
}

console.log(Math.cube(5))


// Inheritance

class Animal {
    saySomething(){
        console.log("I'm an animal")
    }

}
const animal= new Animal()
animal.saySomething()

class Dog extends Animal{
    saySomething(){ // Override
        console.log("I'm a dog")
    }
}
const dog= new Dog()
dog.saySomething()