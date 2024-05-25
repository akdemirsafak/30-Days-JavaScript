// Promises
// Asenkron işlemleri yönetmek için kullanılır.
/*
Callback fonksiyonlarla ardı ardına birden fazla işlem yaparken bir çok karmaşa yaşanabilir.Bu karmaşalara callback hell de denir.
Bu karmaşalar kod okunurluğunu azaltır ve hatalara yol açabilir. 
Bu yüzden ES6 ile birlikte gelen Promise yapısı ile bu karmaşaları önleyebiliriz.

 -------- Promise Syntax --------

Promise bir objedir ve 3 durumu vardır. 
Promise bir status ([[PromiseStatus]]) ve bir sonuç değeri ([[PromiseValue]]) içeren bir objedir.
[[PromiseStatus]]: "pending", "fulfilled", "rejected" olabilir.

1- pending: Promise'in ilk durumu. İşlem henüz tamamlanmamıştır.
2- fulfilled: Promise'in ikinci durumu. İşlem başarılı bir şekilde tamamlanmıştır.
3- rejected: Promise'in üçüncü durumu. İşlem başarısız bir şekilde tamamlanmıştır.

[[PromiseValue]]: Herhangi bir JavaScript değeri olabilir.
[[PromiseStatus]] ve [[PromiseValue]]'nun başlangıç değerleri sırasıyla "pending" ve undefined'dir.
[[PromiseStatus]] ve [[PromiseValue]]'nun değerleri bir kere set edildikten sonra değiştirilemez.


*/

new Promise((resolve, reject) => {
    resolve("Başarılı");
    //reject("Başarısız");
});

// Ne için kullanırız ?

// 1- Bir API'den veri çekmek
// 2- Bir dosya okuma işlemi
// 3- Bir resim yüklemesi

function getImage(file){
    return new Promise((resolve, reject) => {
        if(file) {
            resolve({data: file, status: 200});
        } else {
            reject("Resim yüklenirken hata oluştu.");
        }
    });
}

//getImage("resim.jpg")


// Promise objesinin bizi ilgilendirmediği durumlarda, örneğin verinin değeriyle ilgilendiğimiz durumlarda promise'in değerini alabilmemiz için gömülü methodlar'ından yararlanırız.

// then() methodu: Promise objesi başarılı bir şekilde tamamlandığında çalışır.
// catch() methodu: Promise objesi başarısız bir şekilde tamamlandığında çalışır.
// finally() methodu: Promise objesi her durumda çalışır.



// getImage("resim.jpg")
//     .then((result) => { // resolve durumuna verilen ad denilebilir. then [[PromiseStatus]]'u belirtirken içerisindeki değer [[PromiseValue]]'u belirtir.
//         console.log("İşlem başarılı geldiği için : ",result)
//     }).catch((err) => { // reject durumuna verilen ad denilebilir.
//         console.log("İşlem başarısızsa : ",error)
//     })
//     .finally(()=>console.log("All done!"))




//! Microtask ve Macrotask
// Promise'lerin çalışma mantığı aslında event loop yapısına dayanır. Event loop yapısında iki tür task vardır.
// 1- Microtask: Promise, MutationObserver, process.nextTick
// 2- Macrotask: setTimeout, setInterval, setImmediate, I/O, UI rendering

//Javascript'te event loop yapısı şu şekilde çalışır:
// 1- Javascript dosyası yüklenir ve çalıştırılır.
// 2- Call stack'e fonksiyonlar eklenir ve çalıştırılır.
// 3- Call stack boşalır ve event loop çalışır.
// 4- Event loop'ta öncelikle Microtask'lar çalışır.
// 5- Microtask'lar bittikten sonra Macrotask'lar çalışır.
// 6- Bu işlem sürekli tekrar eder.

// Javascript single-threaded bir dil olmasına rağmen Promise'ler sayesinde Asenktron davranışlar sergileyebilir.

// console.log('Start')
// Promise.resolve('Promise!')
// .then((res) => console.log(res))
// console.log('End')
//Start End Promise şeklinde çıktı alırız. 

// ! Bir promise resolve olduğunda ve then(), catch() veya finally(), method, methed içindeki callback microtask queue'ya eklenir.Bu da demek oluyor ki, then(), catch() veya finally() içindeki methodlar'ın hemen çalıştırılmadığı, Javascript kodumuzun bir takım asenkron davranışlar eklendiği anlamına gelir.

// then(), catch() veya finally() methodları ne zaman çalışır ?
// 1- Call Stack içerisindeki mevcut tüm fonksiyonlar çalıştıktan sonra.Bunlar birer değere döndüğünde stackten atılırlar.
// 2- Call Stack boş olduğunda sıradaki tüm microtask'ler callstack e birer birer eklenir ve çalıştırılır.
// 3- Hem callstack hem de microtask queue boş olursa event loop macrotask queue'de task kalıp kalmadığını kontrol eder.Task'ler callstack'e eklenir,çalıştırılır ve atılır.

//!! Öncelik sıralaması MicroTask'lerin Callstack'e alındıktan sonra Macrostack'lerin callstack'e alınmasıdır.

// console.log('Start')
// setTimeout(() => console.log('Timeout'), 0) // Macrotask
// Promise.resolve('Promise!') //Microtask
// .then((res) => console.log(res))
// //microtask'in daha öncelikli olduğunu gösterir.
// console.log('End')
// Sonuç : Start End Promise Timeout


// ---- Fetch API

// Fetch API, web tarayıcılarında yerleşik olarak bulunan ve HTTP istekleri yapmamızı sağlayan bir API'dir.
// jsonplaceholder.typicode.com sitesinden veri çekmek için kullanacağız.

// const url="https://jsonplaceholder.typicode.com/posts"
// fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.error(err))

// fetch(url,{
//     method: "POST",
//     body: JSON.stringify({
//         title: "foo",
//         body: "bar",
//         userId: 1
//     }),
//     headers: {
//         "Content-type": "application/json; charset=UTF-8"
//     }
// });

// ------ Async/Await 

const square = async function(x) {
    return x*x;
} // Bir fonksiyonun başına async eklersek bu fonksiyon bir promise döner.
square(5).then((res) => console.log("Then ile : ",res))
// const res= await square(7) // ! await sadece async fonksiyonlar içinde kullanılabilir. Sebepsizce await ile çalışmıyor
// console.log(res)

// Async fonksiyonlar her zaman bir promise döner. Eğer return değeri belirtilmemişse, bir promise döner ve bu promise'in değeri undefined olur.

const url="https://jsonplaceholder.typicode.com/posts"

const getData = async function(){ 
    const result= await fetch(url); // await kullanmamamız durumunda then(), catch() ve finally() methodlarını kullanmamız gerekecektir.
    const data= await result.json();
    console.log(data)
}

//getData();
