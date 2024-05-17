// DESTRUCTURING and SPREAD , Rest
// Destructuring Spread is a feature that allows you to spread the elements of an array or object into another array or object.


// --------- Destructuring and Spread

// const numbers=[1,2,3,4,5,6,7,8,9,10]
// let [num1,num2,num3,...num5]=numbers // ilk 3 elemandan sonrası num5  e eklenecek.
// console.log(num1,num2,num3)
// console.log(num5)

// ------------- Destructuring Arrays

// const numbers=[1,2,3]

// let [numberOne,numberTwo,numberThree]=numbers // Diziyi elemanlarına ayırdık. Destructing işlemi.

// console.log(numberTwo)

// let [numOne,,numThree]=numbers // arada çift virgül kullanarak ortadaki elemanı atlayabiliyoruz.Bu işlemi başta,sonda ve istediğimiz her yerde yapabiliriz.
// console.log(numOne,numThree)

// ------------------ Destructuring During Iteration

// const countries=[['Turkey','Ankara'],['Finland','Helsinki'],['Sweden','Stockholm']]

// for(const[country,city] of countries) // Her bir dizi için döndürdük.
// {
//     console.log(country,city)
// }

// Destructuring Object
// 'Yapıyı bozmak' istediğimizde kullandığımız değişkenin adı, nesne anahtarı veya özelliği birebir aynı isimlendirilmelidir.

// const rectangle={
//     width:20,
//     height:10,
//     area:200
// };
// let {width,height,area,perimeter}=rectangle // Bir objeyi parçaladığımız için [] değil {} kullandık.

// console.log(width,height,area,perimeter) // perimeter olmadığı için undefined olarak döner.

// -------------------------
// Object parameter without destructuring
// const rect={
//     width:20,
//     height:10
// };
// const calculatePerimeter= rectangle=>{
//     return 2*(rectangle.width+rectangle.height)
// }
// console.log(calculatePerimeter(rect));

// //with destructuring :
// const calculatePerimeter2=({width,height})=>{
//     return 2*(width+height)
// }
// console.log(calculatePerimeter2(rect))

// -------------------------

// ------------ SPREAD OR REST OPERATOR

const nums=[1,2,3,4,5,6,7,8,9]
const [num1,num2,num3,...rest]=nums // rest operatörü ile kalan elemanları rest dizisine atadık.

// ---- Spread ile array kopyalama

const evens=[0,2,4,6,8,10]
const evenNumbers= [...evens]

const odds=[1,3,5,7,9]
const oddNumbers=[...odds]

const wholeNumbers=[...evens,...odds]
console.log(wholeNumbers)

// ---- Spread ile object kopyalama

const user={
    name:'John',
    surname:'Doe'
}
const copiedUser={...user}
console.log(copiedUser)

// Bu şekilde property ekleme imkanına da sahibiz.
const copiedUserAndTitle={...user,title:'instructor'}
console.log(copiedUserAndTitle)

// ---- Spread operator ile arrow function

const sumAll=(...args)=>{
    console.log(args) //Array olarak yazdı burada mantıken reduce,map vs kullanılabilirdi.

    // console.log(args.map((num)=>num*2))   
}

sumAll(1,2,3,4,5,6,7,8,9,10)