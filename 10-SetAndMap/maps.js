//   -------  MAPS ---------

// Maps are a new key/value data structure in ES6. A Map is an object that lets you store key-value pairs where both the keys and the values can be objects, primitive values, or a combination of both.

// Maps are similar to objects, but there are some key differences:
// 1. Objects use strings as keys, while Maps can use any value (including functions, objects, and primitive values) as keys.
// 2. Maps are iterable, which means you can easily loop through them.
// 3. Maps have a size property that tells you how many key-value pairs are in the Map.
// 4. Maps are ordered, which means they store key-value pairs in the order they were inserted.
// 5. Maps have built-in methods for adding, removing, and getting key-value pairs.
// 6. Maps are more performant than objects when you need to add and remove key-value pairs frequently.
// 7. Maps are more performant than objects when you need to loop through key-value pairs frequently.
// 8. Maps are more performant than objects when you need to store large amounts of data.

// Creating a Map

const map=new Map()
console.log(map) // Map(0) {}

// Creating a Map from array
const mapArray=[
    ['Turkey','Istanbul'],
    ['Germany','Berlin']]
const map2=new Map(mapArray)
console.log(map2)// Map(2) {"Turkey" => "Istanbul", "Germany" => "Berlin"} 

//Adding values to the Map
const citiesMap= new Map()
citiesMap.set('Turkey','Istanbul')
citiesMap.set('Germany','Berlin')
citiesMap.set('France','Paris')
console.log(citiesMap) // Map(3) {"Turkey" => "Istanbul", "Germany" => "Berlin", "France" => "Paris"}
console.log(citiesMap.size) // 3

// Getting values from the Map //key verip value alma
console.log(citiesMap.get('Turkey')) // Istanbul

// Checking if a key exists in the Map //böyle bir key var mı
console.log(citiesMap.has('Turkey')) // true

// Deleting a key from the Map
citiesMap.delete('Turkey')
console.log(citiesMap) // Map(2) {"Germany" => "Berlin", "France" => "Paris"}
console.log(citiesMap.has('Turkey')) // false

//loop
console.log("-------- Loop------")
for(const cities of citiesMap)
{
    console.log(cities)
}

console.log("----------- Loop End --------")

// loop key value

console.log("-------- Loop key value------")
for(const [key,value] of citiesMap)
{
    console.log(key,"-",value) // key = country, value=city we can use any words instead key or value words
}


// Clearing the Map
citiesMap.clear()
console.log(citiesMap) // Map(0) {}


