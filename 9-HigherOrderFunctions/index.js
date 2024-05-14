// ----- Higher Order Functions


// Bir fonksiyonun başka bir fonksiyonu parametre olarak alması ve işleme tabi tutarak return etmesidir.
// Higher Order Functions, fonksiyonları birer veri tipi olarak ele alır ve onlar üzerinde işlemler yapar.

// -- Callback

// const callback=(n)=>{
//     return n**2;
// }

// function cube(callback,n){
//     return callback(n)*n;
// }

// console.log(cube(callback,3));


// Interval : İşlemleri belirli aralıklarla tekrarlama

function callback(){
    console.log("Hello");
}
// setInterval(callback,1000); // her saniye callback fonksiyonunu çalıştıracak.

// setTimeout(callback,3000); // 3 saniye sonra callback fonksiyonunu çalıştıracak. Tekrar etmez.
//setTimeout(callback,3000);

 // _________ FUNCTIONAL PROGRAMMING __________
//Instead of writing regular loop, latest version of JavaScript introduced lots of built in methods which can help us to solve complicated problems. All builtin methods take callback function. In this section, we will see forEach, map, filter, reduce, find, every, some, and sort.


// -- forEach : forEach'leri sadece array'ler ile kullanıyoruz.

// const myArray=[1,2,3,4,5,6,7,8,9,10];
// myArray.forEach(function(element,index,my){
//     console.log(index,element,myArray)
// })

// array function

// console.log(" ------------ Arrow ---------")
// myArray.forEach((element,index,array)=>{
//     console.log(index,element,myArray)
// })

//without {}

//myArray.forEach((element,index,array)=> console.log(index,element,array))

// let sum=0;
// const numbers=[1,2,3,4,5]
// numbers.forEach((n)=>sum+=n);
// console.log(sum)


// -- map : map fonksiyonu, array'in her bir elemanı üzerinde işlem yapar ve yeni bir array döner.

// const numbers=[1,2,3,4,5]
// const numbersSquare= numbers.map(num=>num*num); // Her elemanı kendisiyle çarptık ve  1,4,9,16,25 dizisini çıkardık.
// console.log(numbersSquare)

// const names = ['George', 'Adam', 'Json', 'Mia']
// const namesToUpperCase = names.map((name) => name.toUpperCase())
// console.log(namesToUpperCase)

// -- filter : filter fonksiyonu, array'in her bir elemanı üzerinde işlem yapar ve belirli bir koşulu sağlayan elemanları yeni bir array olarak döner.
// filter: Filter method creates a new array 
// with all elements that pass the test implemented by the provided function.

// const numbers=[1,2,3,4,5]
// const numbersGreaterThanTwo = numbers.filter(num=>num>2);
// console.log(numbersGreaterThanTwo)


// -- reduce: The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.

// -- every : Tüm elemanları kontrol eder ve hepsi şarta uyuyorsa true döner.

// const names=['şafak','ahmet','mehmet','ayşe']

// const isAllStr=names.every((name)=>typeof name==='string')
// console.log(isAllStr)

// --find , findIndex 6- arrays'de var.

// -- some 
// The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true; otherwise it returns false.

// const myArray=['şafak',1,false,[{},{}]]
// const isAnyStr=myArray.some((element)=>typeof element==='string') // Bu şarta uyan herhangi bir eleman varsa true döner.
// console.log(isAnyStr)

// -- sort : Orjinal array'de değişiklik yapar.

// myArray(function(a,b){
//     bu şekilde şarta uyanları sıralama gibi bir durum söz konusu olabilir.
// })

// -- Chaining : Birbirine bağlama
// map,filter,reduce,find,sort,forEach gibi fonksiyonları birbirine bağlayarak kullanabiliriz.
let arr=[10,8,7]
let result=arr.map((n)=>n*2).filter((n)=>n>10).reduce((a,b)=>a+b)
console.log(result)
