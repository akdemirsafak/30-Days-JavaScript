//Arrays


// Empty Arrays
let arr=new Array()
let arr1=[]
// console.log(arr)
// console.log(arr1)

//Create array with values
let countries=["Turkey","Netherland","United Kingdom","United States","Swiss","Poland","Greece","Italy","Spain","Russia","Ukraine"]

let cars=["Bmw","Ferrari","Mercedes","Renault","Skoda"]
//console.log(cars)

//Modify array
cars[3]="Toyota"
//console.log(cars)


//Array manipulate methods

//Array Constructor

let myArray= Array() //creates an empty array
let myArray1= Array(5) //creates an array with 5 empty slots

//Creating static values with fill
let five0Elements= Array(5).fill(0) //creates an array with five 0 elements


//Arrays for examples

var array1=[1,2,3]
var array2=[4,5,6,2]

//Adding elements to an array

cars.push("Subaru") //Sona ekle
let lastIndex= cars.length-1;

// ---------------------- Concatenating Arrays using concat ( Array'leri birleştirme )

var array3=array1.concat(array2);
console.log(array3)

// ---------------------- Pop
//Removes the last element from an array and returns it

//var poppedElement=array3.pop()
//console.log("Popped: ",poppedElement,"New Arr : ",array3)

// ---------------------- Shift
//Removes the first element from an array and returns it

//var shiftedElement=array3.shift()
//console.log("Shifted: ",shiftedElement,"New Arr : ",array3)

// ---------------------- Unshift
//Adds one or more elements to the beginning of an array and returns the new length of the array

//array3.unshift(1)
//console.log(array3)

// ---------------------- Slice
//Returns a copy of a portion of an array

// let slicedArray=array3.slice(1,3);
// console.log("Sliced elements :", slicedArray) //Arr3 not usable after slice

// ---------------------- Splice
//Adds and/or removes elements from an array

// let splicedArray=array3.splice(1,2)
// console.log("Spliced elements :", splicedArray,"New Array : ",array3)

// ---------------------- IndexOf
//Returns the first index at which a given element can be found in the array, or -1 if it is not present

//console.log(array3.indexOf(2))

// ---------------------- LastIndexOf
//Returns the last index at which a given element can be found in the array, or -1 if it is not present
//console.log(array3.lastIndexOf(2))

// ---------------------- Includes
//Determines whether an array includes a certain element, returning true or false as appropriate

//console.log(array3.includes(2))

// ---------------------- Reverse
//Reverses the elements in an array

//console.log(array3.reverse())

// ---------------------- Join
//Joins all elements of an array into a string

//console.log(array3.join("-")) //string'e çevirdi ve elemanları - ile ayırdı

// ---------------------- toString

//console.log(array3.toString())

// ---------------------- Fill
//Fills all the elements of an array from a start index to an end index with a static value

//console.log(array3.fill(0,1,3)) //1. indexten 4. index'e kadar olan elemanları 0 ile değiştirdi.


// ---------------------- Find
//Returns the first element in an array that passes a test

 let found=array3.find((element)=>element>3) //şarta uyan ilk elemanı getirdi.
 console.log(found)


// ---------------------- FindIndex
//Returns the first index in an array that passes a test

let foundIndex=array3.findIndex((element)=>element>3) //şarta uyan ilk elemanın index'ini getirdi.
console.log(foundIndex)

// ---------------------- Filter
//Returns a new array containing all elements that pass a test
let filteredArray = array3.filter((x=>x==2)) //Şarta uyanları getirir.
console.log(filteredArray)

// ---------------------- Map
//Creates a new array with the results of calling a provided function on every element in the array

let mappedArray=array3.map((x)=>x*2) //Her elemanı 2 ile çarptı.
console.log(mappedArray)

// ---------------------- Reduce
//Applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value

let reducedArray=array3.reduce((acc,curr)=>acc+curr) //Tüm elemanları topladı.
console.log(reducedArray)


// ---------------------- Join
//Joins all elements of an array into a string

console.log(array3.join("-")) //string'e çevirdi ve elemanları - ile ayırdı




// ---------------------- Array.isArray
//Determines whether the passed value is an Array
console.log(Array.isArray(array3))

// ---------------------- Array.of
//Creates a new Array instance from a variable number of arguments, regardless of number or type of the arguments
let arrOf=Array.of(1,2,3,4,5)
console.log(arrOf)

// ---------------------- Array.from
//Creates a new, shallow-copied Array instance from an array-like or iterable object
let arrFrom=Array.from("hello")
console.log(arrFrom)


// ---------------------- Array.prototype.entries
//Returns a new Array Iterator object that contains the key/value pairs for each index in the array
let arrEntries=array3.entries()
arrEntries.forEach(element => {
    console.log(element)
});


// ---------------------- split
//Splits a string object into an array of strings by separating the string into substrings
//string i diziye çevirir ve belirtilen karakterlerden ayrılır.

let js = 'JavaScript'
const charsInJavaScript = js.split('')