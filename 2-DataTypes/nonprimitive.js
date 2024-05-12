
//###########  Non-Primitive Data Types
//Non-primitive data types are modifiable or mutable.We can modify the value of non-primitive data types after it gets created.
//Non-Primitive veri tipleri referans adreslerine göre karşılaştırılır.

let arrayOne=[1,2,3];
let arrayTwo=[1,'a',true,3.5,"john",[],"Functions",null];

//Non-Primitive Data Types cannot be compared by value. (İlkel olmayan veri türlerinde değer kıyaslaması yapılamaz.)
let nums=[1,2,3]
let numbers=[1,2,3]
console.log("Non primitive different arrays(same elements) compare : ",nums==numbers) //Aynı değerleri taşımasına rağmen False çıktısını verir.


//Referans adreslerine göre karşılaştırma yaparlar. Dizi, nesne ve fonksiyonlar karşılaştırılamaz.

let userOne={
    name:'şafak',
    role:'admin',
    country:'turkey'
}
let userTwo={
    name:'şafak',
    role:'admin',
    country:'turkey'
}
console.log("Non primitive object compare : ",userOne==userTwo) //Aynı değerleri taşımasına rağmen False çıktısını verir.

//Non-Primitive Data Types can be compared by reference. (İlkel olmayan veri türleri referans adreslerine göre karşılaştırılabilir.)
let userThree=userOne;
console.log("Non primitive object compare(Same address) : ",userOne==userThree) //True çıktısını verir.

userThree.country='holland'
console.log(userOne) //userThree'de yapılan değişiklik userOne'da da etkili olur çünkü aynı referans adresi kullanıyorlar.