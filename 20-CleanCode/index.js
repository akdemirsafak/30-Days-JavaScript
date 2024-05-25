// ------------------------ Clean Code / Temiz kod ------------------------

// Stil klavuzu

/*
Stil klavuzu, kodunuzun nasıl göründüğüne dair bir dizi kural ve öneri içerir. Bu kurallar ve öneriler, kodunuzun okunabilirliğini ve anlaşılabilirliğini artırır. Bu, kodunuzu daha kolay bakım yapılabilir ve daha az hata yapılabilir hale getirir.


    ------------ En yaygın stil kılavuzları ------------
    1. Google JavaScript Style Guide
        https://google.github.io/styleguide/jsguide.html
      
    2. Airbnb JavaScript Style Guide
        Neredeyse JavaScript'in her yönüne dair bir kılavuzdur. Bu kılavuz, JavaScript kodunuzu yazarken ve düzenlerken dikkate almanız gereken birçok kural ve öneri içerir.
        https://github.com/airbnb/javascript

    3. StandardJS Style Guide
        https://standardjs.com/

*/

/* ----------------------- Kodlama Kuralları
1. Temiz Kod yazmak
2. Kod okunabilirliğini geliştirmek
3. Kodun yenilen kullanılabilirliğini ve sürdürülebilirliğini geliştirmek
amaçlarıyla kullanılır.
*/

// Temiz Kod Yazma Prensipleri/Kuralları

/*
1. Anlaşılır isimler kullanın
    Değişkenlerin, fonksiyonların ve sınıfların isimleri anlamlı olmalıdır. Bu, kodunuzun okunabilirliğini artırır.
    Örnek: 
        const a = 5; // Kötü
        const sayi = 5; // İyi
2. Aynı konseptler için aynı isimleri kullanın
    Aynı konseptler için aynı isimleri kullanmak, kodunuzun tutarlı olmasını sağlar.
    Örnek:
        function getUserName() { ... }
        function getUserNameById() { ... }
3. Tek bir işi yapın
    Fonksiyonlarınızın, sınıflarınızın ve modüllerinizin tek bir işi yapmasını sağlayın.
    Örnek:
        function getUserName() {
            // Kullanıcı adını getir
        }
        function setUserName() {
            // Kullanıcı adını ayarla
        }
4. Kısa fonksiyonlar yazın
    Fonksiyonlarınızın kısa olması, kodunuzun okunabilirliğini artırır.
    Örnek:
        function getUserName() {
            // Kullanıcı adını getir
        }
        function setUserName() {
            // Kullanıcı adını ayarla
        }
5. Tekrarlanan kodları önleyin DRY (Don't Repeat Yourself)
    Tekrarlanan kodlar, kodunuzun bakımını zorlaştırır. Bu nedenle, aynı kodu birden fazla kez yazmaktan kaçının.
    Örnek:
        const sayi1 = 5;
        const sayi2 = 10;
        const toplam = sayi1 + sayi2;
6. Yorum ekleyin
    Kodunuzun ne yaptığını açıklamak için yorumlar ekleyin. Ancak, gereksiz yorumlardan kaçının.
    Örnek:
        // Kullanıcı adını getir
        function getUserName() { ... }
7. Kodunuzu düzenleyin
    Kodunuzu düzenli bir şekilde yazın. !!!!!!!   Boşlukları, girintileri ve satır sonlarını doğru bir şekilde kullanın. !!!!!!!!!
    Örnek:
        function getUserName() {
            // Kullanıcı adını getir
        }
        function setUserName() {
            // Kullanıcı adını ayarla
        }
8. Kodunuzu test edin
    Kodunuzu test ederek, hataları ve sorunları erken aşamada tespit edebilirsiniz.
    Örnek:
        function getUserName() {
            // Kullanıcı adını getir
        }
        function setUserName() {
            // Kullanıcı adını ayarla
        }

*/

// UYGULAMALAR

// Variables
let fistName='Şafak'
let country='Turkey'
const PI=Math.PI
const gravity= 9.81

// Arrays

const fruits=['Apple','Banana','Orange'] // isimler çoğul ve içerikle/konuyla alakalı

// Functions

function getFullName(){ // CamelCase
    return 'Şafak Akdemir'
}
function printUserName(){
    console.log('Şafak Akdemir')
}

// Loops
const numbers=[1,2,3,4,5,6,7,8,9,10]
let length=numbers.length;

for(let i=0;i<length;i++){
    console.log(numbers[i])
}

// for of loop
for(let number of numbers){
    console.log(number)
}

// for each
numbers.forEach(number=>console.log(number))


const people={
    name:'Şafak',
    lastName:'Akdemir',
    age:25,
    country:'Turkey'
}
for(let key in people){
    console.log(`${key} : ${people[key]}`)
}




// Objects

const person={ // Nesneler const ile tanımlanır.
    name:'Şafak',
    lastName:'Akdemir'
}

// Classes
class ClassName{ // CamelCase
}


