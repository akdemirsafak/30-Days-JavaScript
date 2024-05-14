 // -------- SCOPES

//Scopes 

// A variable can be declared at different scope.


// 1. Global Scope :  


// Anything declared without let,var or const is scoped at global level.
// A variable declared at global level is accessible from anywhere in the code.

//          a.) Window Global Object


// a='JavaScript' // WINDOW object and can found anywhere
// b=10

// function letsLearnScope(){
//     console.log(a,b) //Accesable
//     if(true){
//         console.log(a,b)
//     }
// }
// console.log(a,b)
// letsLearnScope()

//              b.) Global Scope


// A variable declared with var is scoped at global level.

// let a='JavaScript'
// var b=10

// function letsLearnScope(){
//     console.log(a,b) //Accesable
//     if(true){
//         let a='Python'
//         let b=100
//         console.log(a,b)
//     }
//     console.log(a,b)
// }
// letsLearnScope()
// console.log(a,b)

// 2. Local Scope : 
//A variable declared as local can be accessed only in certain block code 

//          a.) Block Scope
//          b.) Function Scope

// let a='JavaScript'
// let b=10

// Function Scope
// function letsLearnScope(){
//     let a='Python'
//     let b=100
//     let value=false
//     Block Scope
//     if(true){ş
//         let a='Java'
//         let b=1000
//         let value=true
//         console.log("Inside Block Scope: ",a,b,value)
//     }
//     console.log("Inside Function Scope : ",a,b,value)
// }
// letsLearnScope()
// console.log("Outside Blocks: ",a,b)

// {
// let c=100 //Block scope
// console.log(c)
// }


//var's:
// var is function scoped

// for(var i=1;i<=5;i++){ // var fonksiyon içerisinde olmasına rağmen dışarıda iken 6 değerini yazdı.
//     console.log('i',i)
// } // let olarak kullanırsak dışarıdan erişmez hale geliriz.
// console.log('i',i)
//var ile belirlediğimiz değişkenler dışarıdaki değişkenleri etkileyebilir.Bu sebeple dikkatli kullanılması gerekir.

// Array,Object ve function'lar, arrow function'lar için const kullanımı önerilir.