// --- SET AND MAP ---

//sette her elemandan bir tane olabilir
//map in objectten farkı ise object'in keyleri string iken, map'te key'ler istediğimiz veri türünden olabilir(string,int vs..)

// 1. Set
// set is a collection of elements.Set can ONLY CONTAINS UNIQUE ELEMENTS.
// Set is a new data structure that JavaScript got with ES6.

// const brands=new Set()
// console.log(brands) // Set(0)

//Creating set from array
// const brandsArray=['Apple','Samsung','Sony','Apple']
// const brands=new Set(brandsArray)
// console.log(brands) // Set(3) {"Apple", "Samsung", "Sony"}

//Adding new element to set
// brands.add('Huawei')
// console.log("Added Huawei : ",brands) // Set(4) {"Apple", "Samsung", "Sony", "Huawei"}

//Deleting an element from set
// brands.delete('Sony')
// console.log("Deleted sony : ",brands) // Set(3) {"Apple", "Samsung", "Huawei"}

//Checking if an item exists in the
//console.log("Map has Apple ? : ",brands.has('Apple')) // true

//Getting the size of set
//console.log("Size : ",brands.size) // 3

// clear map
// brands.clear()
// console.log("After clear : ",brands) // Set(0)


//  ----- Union of Sets - Setleri birleştirme

// let a=[1,2,3,4]
// let b=[5,6,7,8]
// let c=[...a,...b]


// let A=new Set(a)
// let B=new Set(b)
// let C=new Set(c)
// console.log(C)
// console.log(A.union(B)) // Set(8) {1, 2, 3, 4, 5, 6,



// ----- Intersection of Sets

// let a=[1,2,3,4,5]
// let b=[3,4,5,6,7]
// let A=new Set(a)
// let B=new Set(b)
// // 1. yöntem
// console.log("Intersection : ",A.intersection(B)) // Set(3) {3, 4, 5}

// //2. yöntem
// let c= a.filter((num)=>B.has(num));
// let C= new Set(c);
// console.log("Filtered set : ",C)

// ---- Difference of sets

// let a=[1,2,3,4,5]
// let b=[3,4,5,6,7]
// let A=new Set(a)
// let B=new Set(b)

// console.log("Difference : ",a.filter((num)=>!B.has(num)))
