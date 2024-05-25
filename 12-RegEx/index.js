// Regular expressions
// RegExp
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

// Regular expression, bir pattern (desen) tanımlar ve bu pattern'ı aramak, eşleşenleri bulmak ve değiştirmek için kullanılır.Telefon numarası,eposta formatı, yasaklı kelimeler, sadece sayılar gibi kurallar tanımlayabiliriz.

// Flags :
// İsteğe bağlı olarak kullanılan ek özelliklerdir.

// i : Case-insensitive (büyük/küçük harf duyarlılığı yok)
// g : Global (tüm eşleşmeleri bulur)
// m : Multiline (çok satırlı mod)


// Regexp ifadeleri 2 tane / arasına yazılır.

// Creating a Pattern with RegExp Constructor




// ------------- flagsiz
// let pattern='love';
// let regex=new RegExp(pattern);

// ---------- flag ile
// let pattern='love';
// let flags='gi'; // global ve case-insensitive
// let regex=new RegExp(pattern,flags);

// --- Creating a Pattern without RegExp Constructor

let regEx=/love/gi

let regExp= new RegExp('love','gi');


// ---- RegExp Object Methods

// ----- testing for a match : test()
const str='I love JavaScript. Because JavaScript is cool.';
const pattern=/love/
const result=pattern.test(str); // str'yi pattern ile test et
console.log(result); // true

// ----- Array containing all of the matches : match()

const result2=str.match(pattern);
//console.log(result2); // ["love", index: 2, input: "I love JavaScript. Because JavaScript is cool.", groups: undefined]
// Burada elemana, index'ine, inputuna ve groups'una erişebiliriz.

// ------- search() : Returns the index of the first match. If no match is found, it returns -1.
const result3=str.search(pattern);
//console.log(result3); // 2

// ------ replace() : Returns a new string with some or all matches of a pattern.
const result4=str.replace(pattern,'like');
console.log(result4); // I like JavaScript. Because JavaScript is cool.

const result5=str.replace(/javascript/gi,'Python'); // g olmasaydı sadece ilk eşleşmeyi değiştirirdi. i olmasaydı büyük harf küçük harf duyarlı olurdu ve bir değişiklik olmazdı.
const result6=str.replace(/python|Python/,'c#'); // python veya Python olanları c# ile değiştir. Orjinal metinde olmadığı için bir değişiklik olmaz.
console.log(result6)

const txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing.\
T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing \
p%e%o%ple.\
I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs.\
D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'

matches = txt.replace(/%/g, '')
console.log(matches)   // Buradaki % işaretlerini kaldırır.


let examPattern= /[Aa]pple|[Bb]anana/g // Apple veya apple veya Banana veya banana olanları bul.

examPattern= /\d/g // sayı bul
examPattern= /\d+/g // birden fazla sayı bul
examPattern= /\D/g // sayı olmayanları bul
examPattern= /\s/g // boşluk bul
examPattern= /\S/g // boşluk olmayanları bul
examPattern=/[a]./ // a ile başlayanları bul
examPattern=/[a].+/ // a ile başlayan ve en az bir karakteri olanları bul
examPattern=/[a].{2}/ // a ile başlayan ve 2 karakteri olanları bul
examPattern=/[a].{2,4}/ // a ile başlayan ve 2-4 karakteri olanları bul
examPattern=/[a].{2,}/ // a ile başlayan ve en az 2 karakteri olanları bul
examPattern=/[a-z]/ // a-z arasındaki karakterleri bul
examPattern=/[A-Z]/ // A-Z arasındaki karakterleri bul
examPattern=/[0-9]/ // 0-9 arasındaki karakterleri bul
examPattern=/[^0-9]/ // 0-9 ile başlayan bul

