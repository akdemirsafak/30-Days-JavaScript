/// ------------- CONSOLE OBJECT METHODS


// console.log() method

console.log('30 Days of Javascript') // show output on browser console.

// Subsitution
console.log('%d of %s', 30,'Javascript') // Days of Javascript

// CSS
console.log('%c30 Days of JavaScript','color:green') // yazı rengi değiştirildi.

console.log(
    '%c30 Days%c %cOf%c %cJavaScript%c',
    'background-color:green',
    '',
    'color:red;text-decoration:underline',
    '',
    'color:blue'
) // %c %c aralığında belirlediğimiz karakterler ile ilgili düzenlemeler yaptık.


// console.warn() : show warning message on browser console.

console.warn('This is a warning') // 
console.warn('You are using React. Do not touch the DOM. Virtual DOM will take care of handling the DOM!')

// console.error() : show error message on browser console.
console.error('This is an error') 

// console.table() : display data as a table on browser console. Konsolda tablo göstermenin yoludur.

const person = {
    name:"Şafak",
    title:"Software Developer",
    country:"Turkey",
    city:"Istanbul"
}
console.table(person) // Array'ler için de kullanılabilir.

//console.time() : Starts a timer you can use to track how long an operation takes.
// console.timeEnd() ile sonlandırılır ve bize işlemin ne kdar sürdüğünü döndürür.
console.time('for loop')
console.log("-------- Console Time started ----------")
for (let i = 0; i < 3; i++){
    console.log(i)
}
console.timeEnd('for loop')
console.log("-------- Console Time End ----------")

// console.info() : show info message on browser console.
console.info('This is an info message')

// console.assert() : write an error message to the console if the assertion is false. If the assertion is true, nothing happens.
console.assert(4 < 3, '4 is greater than 3') // şart karşılanmazsa console'da görünecek. 


// console.group() : group contents in a list
console.group('Names')
console.log('Name: Şafak')
console.log('Title: Software Developer')
console.log('Country: Turkey')
console.groupEnd('Names')

// console.groupCollapsed() : group contents in a list and the list is collapsed
console.groupCollapsed('groupCollapsed')
console.log('Name: Şafak')
console.log('Title: Software Developer')
console.log('Country: Turkey')
console.groupEnd('groupCollapsed')

//console.count() 
// bir fonksiyonun kaç defa çalıştığını görüntülemek için iyi bir yöntemdir.

console.log("-------- console.count() -----")
const sayName=()=>{
    console.count('Şafak')
}
sayName()
sayName()
sayName()



// console.clear() : clear the console



