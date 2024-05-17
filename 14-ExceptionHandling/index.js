// Error Handling

// Javascript is a loosely-typed language.
// It means that you can assign any type of value to a variable without any type checking.
// But, it also means that you can run into errors if you are not careful.
// For example, if you try to add a string and a number, you will get an error.
// To handle such errors, you can use try-catch blocks.

//Javascript tip güvenli bir dil değildir.Undefined gibi hataları runtime'da alırız.
//Hata yönetimi için try-catch bloklarını kullanabiliriz.

try {
    //kod bloğu
} catch (error) {
    //yukarıdaki blokta hata gelirse buraya girer.Burada hataları handle edebiliriz.
}finally{
    // burası iki durumda da çalışır.
}

// Example

try{
    let lastName="Akdemir"
    let fullName=`${firstName} ${lastName}`
}catch(err){ // error'lar name, message property'lerini içerir.
    console.log(err)
    console.log(`%cError name : ${err.name}%c - %cError Message : ${err.message}%c`,'color:red','','color:blue')
    //throw new Error('Custom error atıyoruz.')
}

// Error Handling with throw
// Kendi hatalarımızı oluşturmak için throw anahtar kelimesini kullanabiliriz.
// throw new Error('Custom error atıyoruz.')
// throw new Error('Custom error atıyoruz.',{name:'CustomError',message:'Custom error atıyoruz.'})


// const throwError=()=>{
//     let message
//     let x=prompt('Bir sayı giriniz : ')
//     try{
//         if(x=="") throw 'Boş değer girdiniz.'
//         if(isNaN(x)) throw 'Sayı girmelisiniz.'
//         x=Number(x)
//         if(x<5) throw '5 den büyük bir sayı girmelisiniz.'
//         if(x>10) throw '10 dan küçük bir sayı girmelisiniz.'
//     }catch(err){
//         console.log(err)
//     }
// }
// throwError();


// ---- ERROR TYPES
// ReferenceError: Tanımlanmamış bir değişkeni çağırdığınızda alırsınız.
// SyntaxError: Yanlış syntax kullanıldığında alırsınız.
// TypeError: Yanlış veri tipi kullanıldığında alırsınız.