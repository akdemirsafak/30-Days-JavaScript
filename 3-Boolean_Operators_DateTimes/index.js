/* 1. Boolean Operators
     # Truthy Values
    - All numbers(positive and negative) are truthy except zero ( Sıfır hariç tüm sayılar )
    - All strings except empty string ( Boş string'ler hariç.)
    - The boolean true


    # Falsy Values
    - Zero
    - 0
    - 0n
    - null
    - undefined
    - NaN
    - false
    - '' or "" (empty string)
    */


    // Window Methods

    //alert(message) => Alert box çıkarır.
    //dont use too much alert because it is destructing and annoying, use it just to test.

    //prompt("Required Text","optional text") kullanıcıdan girdi alırken kullanırız.2. parametre input alanına denk gelir.
    // const result = prompt("Enter your name");

    //confirm("Record will delete are you sure ?") Onay kutusu çıkarır.

    // let result= confirm("Are you sure ?");
    // console.log(result)

// 2. Date and Time Objects


const date=new Date()


console.log(date.getFullYear()) //2024
console.log(date.getMonth()) //0-11
console.log(date.getDate()) //1-31
console.log(date.getHours()) //0-23
console.log("Get Time : ",date.getTime()) //Bugün ile 1970 January(Ocak) 1 arasındaki süre Saniye
console.log(date.getMinutes()) //0-59
console.log(date.getSeconds()) //0-59
console.log(date.getMilliseconds()) //0-999
console.log(date.getDay()) //0-6 Sunday 0, Monday 1 and Saturday 6
console.log(date.getTimezoneOffset()) //GMT ye göre farkı
console.log(date.toString()) //Thu Jan 02 2024 10:00:00 GMT+0300 (GMT+03:00)
console.log(date.toDateString()) //Thu Jan 02 2024


