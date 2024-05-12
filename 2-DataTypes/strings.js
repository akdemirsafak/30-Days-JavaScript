let firstName="Şafak";
let surName="Akdemir";


//String Concatenation
let fullName=firstName+" "+surName;
console.log(fullName)
console.log(`${firstName} ${surName}`)
console.log(firstName,surName)

//Long Literal Strings

const paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, minus quos, laboriosam\
    ab enim sunt dignissimos nihil ratione aliquid suscipit quae. \
    Ab reiciendis ipsa cumque ad dolor nostrum? Perferendis, nisi.\
    Est nisi nemo pariatur fugit aliquam fuga ex impedit tempore cum unde quas soluta quia aspernatur ipsa \
    illum saepe delectus qui amet, eum non. Laborum asperiores quasi accusamus saepe quidem \
    Dolor aliquid iste amet alias, expedita temporibus enim eum in quae, omnis dolorum aut ex eius? Iusto officia provident\
    porro ipsam placeat alias, nemo doloribus autem enim aperiam vitae";

// \n : new line
// \t : tab (8 spaces)
// \\ : back slash
// \' : single quote(')
// \" : double quote (")


//String Methods

console.log(firstName.length) //String uzunluğu
console.log(firstName[0]) //İlk karakter
console.log(firstName.charAt(0)) //İlk karakter
console.log(firstName[firstName.length-1]) //Son karakter
console.log(firstName.toUpperCase())
console.log(firstName.toLowerCase())
console.log("Şafak".substr(1,3)) // 1den başla 3 karakter al
console.log("Şafak".substring(1,3)) // 1 den başla 3. ye kadar al
console.log(firstName.charAt(firstName.length-1)) //Son karakter
console.log(firstName.indexOf('a')) //İlk a'nın indexi
console.log(firstName.lastIndexOf('a')) //Son a'nın indexi
console.log(firstName.startsWith('Ş')) //Ş ile başlıyor mu?
console.log(firstName.endsWith('k')) //k ile bitiyor mu?
console.log(firstName.includes('f')) //f var mı?
// console.log(firstName.substr(1,4)) //1. index ile 4. index arasındaki karakterleri alır.
console.log(firstName.slice(1,4)) //1. index ile 4. index arasındaki karakterleri alır.
console.log(firstName.slice(-3)) //Son 3 karakter
console.log(firstName.split(',')) //, karakterlerinden ayırır.
console.log(firstName.replace('a','o')) //İlk a karakterini o ile değiştirir.
console.log(firstName.replaceAll('a','o')) //İlk a karakterini o ile değiştirir.
console.log("  asda ".trim())
console.log("  asda ".trimStart())
console.log("  asda ".trimEnd())
console.log(firstName.repeat(3)) //3 kere tekrarlar
console.log(firstName.concat(' ',surName)) //Birleştirme
console.log("Şafak".search("z")) // varsa index getirir.yoksa -1

// -------- MATCH --------


let sentence="I Love JavaScript.If you do not love JavaScript what else can you love.";
let pattern=/love/gi //g global'i - i insensitive'i ifade eder. Regex
let result=sentence.match(pattern);
console.log(result)

let text='In 2019, I ran 30 Days of JavaScript, in 2020 I am super exited to start this challenge.'
let regex=/\d+/g 
//d : digit(sayılar-rakamlar) + ise birden fazla
console.log(text.match(regex))


//Changing Data Type

// parseInt()
// parseFloat()
// Number()
// + sign Eğer bir string sayıyı Number'a çevirmek istiyorsak önüne + koyarak yapabiliriz.
// str()

let number="75"
console.log(parseInt(number))