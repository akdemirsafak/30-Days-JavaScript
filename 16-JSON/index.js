 // --------- JSON ( JavaScript Object Notation)
    // JSON is a lightweight data-interchange format
    // JSON is language independent
    // JSON is "self-describing" and easy to understand
    // JSON uses JavaScript syntax, but the JSON format is text only or string only
    // Json is mostly used when data is sent from a server to a client.

 // Json ile JavaScript görüldüğü üzere oldukça benzer yapılardır ve birbirlerine dönüştürülebilirler.
// Key'ler her zaman string olmalıdır.
// Converting JSON to JavaScriptObject

// JSON.parse()

const usersText=`{
    "users":[
        {
            "id":1,
            "title":"delectus aut autem",
            "completed":false
        },
        {
            "id":2,
            "title":"quis ut nam facilis et officia qui",
            "completed":false
        },
        {
            "id":3,
            "title":"fugiat veniam minus",
            "completed":false
        }
    ]
}`
// Json javascriptte typeof ile baktığımızda string'dir.

// const usersObj=JSON.parse(usersText);
// console.log(usersObj)
// console.log(usersObj.users)

// Objeyi,Veriyi serilaze etmek stringfy deserilaze ise parse işlemidir.
// Json'dan objecte geçirirken parse, object'ten json'a geçirmek için stringify kullanırız.


// Converting JavaScriptObject to JSON

// JSON.stringify()
const categories=[
    {id:1,name:"Beverages"},
    {id:2,name:"Condiments"},
    {id:3,name:"Vegetables"}
]

// console.log(JSON.stringify(categories)) // Sunucuya veri gönderirken kullanılabilir.
// console.log(JSON.stringify(categories,null,2)) // Sunucuya veri gönderirken kullanılabilir.

const categoriesJson=JSON.stringify(categories);

// More ... Reviver : 
// JSON.stringify(value[, replacer[, space]])

// JSON.stringify() methodu ile birlikte kullanılan replacer parametresi, JSON.stringify() methodu ile belirtilen değerlerin nasıl dönüştürüleceğini belirlemek için kullanılır.
// JSON.stringify() methodu ile birlikte kullanılan space parametresi, JSON.stringify() methodu ile belirtilen değerlerin nasıl dönüştürüleceğini belirlemek için kullanılır.
// console.log("----- key value")
// const ctg=JSON.parse(categoriesJson,(key,value)=>{
//     console.log(key,value)
//     // Burada shorthand key ve value'larda düzenleme yapılabilir.
// })

// Using a filter with Json stringify

const newCategoriesJSON= JSON.stringify(categories,['name'],2) // 2 girdileri soldan başlayıp 2 boşluk yani görünümü formatlamamız anlamına gelir 'name' veya daha fazlasını söyleyerek sadece belirttiğimiz alanların json'a çevrilmesini sağladık.
console.log(newCategoriesJSON)