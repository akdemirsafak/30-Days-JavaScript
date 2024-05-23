// Document Object Model (DOM)
// The DOM is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.
// The DOM is an object-oriented representation of the web page, which can be modified with a scripting language such as JavaScript.
// The DOM is a W3C (World Wide Web Consortium) standard.
// The DOM defines the logical structure of documents and the way a document is accessed and manipulated.
// The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.
// A Web page is a document. This document can be either displayed in the browser window or as the HTML source. But it is the same document in both cases. The Document Object Model (DOM) represents that same document so it can be manipulated. The DOM is an object-oriented representation of the web page, which can be modified with a scripting language such as JavaScript.

//Dom, programların ve komut dosyalarının bir belgenin içeriğine,yapısına ve stiline dinamik olarak erişmesine ve güncellemesine izin veren bir platform ve dilden bağımsız bir arayüzdür.
//Klasördeki görsel DOM yapısını daha açık bir şekilde özetlemektedir.

// Dom'da Html ile hazırladığımız sayfa, document; bu document'in içerisine yerleştirdiğimiz her türlü öğe ise element olarak adlandırılır.
// DOM'da nesnelerin birer element olarak kullanılabilmesi için hiyerarşik bir düzen izlenerek çağırılmaları gerekir.Html'deki her bir elemanın birbiri ile hiyerarşik bir yapı oluşturması ile oluşur. DOM bir ağaç dizini gibi bütün dökümanları birbirine bağlar.




        //----------- getElementsByTagName ------------
        const allTitles = document.getElementsByTagName('h1')
        //console.log(allTitles) // HTML COLLECTION

        // for (let i = 0; i < allTitles.length; i++) {
        //     console.log(allTitles[i])
        // }

        //----------- getElementById -----------

        // const firstTitle = document.getElementById('first-title')
        // console.log(firstTitle)


        // ------------ getElementsByClassName
        const allClassTitles = document.getElementsByClassName('title')

        //console.log(allClassTitles) //Html collection h1#third-title.title : id ve class'ını da getirdiğini görebiliriz.

        //------------ querySelector
        // querySelector ile tag, id veya class isimleri kullanılabilir.
        // querySelectorAll ile tüm tag, id veya class isimleri getirilir.
        // querySelector ile ilk bulduğu elemanı getirir.

        const elementById = document.querySelector('#third-title')
        const elementsByClassName = document.querySelector('.subtitle')
        const elementsByTagName = document.querySelectorAll('h1')
        const elementByTagName = document.querySelector('h1')
        // console.log(elementById)
        // console.log(elementsByClassName)
        // console.log(elementsByTagName)


        // ------------- Adding Attribute -----------------

        const subTitleElement = document.querySelector('.subtitle')

        // subTitleElement.className += " ustune-ekle"
        // subTitleElement.id = "second-id";

        // subTitleElement.setAttribute('id', `new-id`)
        // subTitleElement.setAttribute('class', 'new-class')


        // console.log(subTitleElement)


        // ------------- Adding Class Using classList
        // istediğimiz kadar parametre geçerek class ekleyebiliriz.
        subTitleElement.classList.add('birden-fazla', 'new-class', 'metro', 'boomin')



        // ------------- Removing Class Using classList
        subTitleElement.classList.remove('birden-fazla', 'new-class') // Birden fazla parametre geçebilir ve belirtilen class'ları sileriz.
        //console.log(subTitleElement)


        // ------------- Adding Text to HTML element
        const myDiv = document.querySelector('div')
        myDiv.textContent = 'Hello world!';
        const myList = `
        <ul>
            <li>Metro</li>
            <li>Travis</li>
            <li>The weeknd</li>
            <li>Young Thug</li>
            <li>Playboi Carti</li>
        </ul>`


        myDiv.innerHTML += myList;

        console.log(myDiv)

        // ------------- Adding Style to HTML elements

        const titles = document.querySelectorAll('h1')
        titles.forEach((title, i) => {
            title.style.fontSize = '24px' // all titles will have 24px font size
            if (i % 2 === 0) {
                title.style.backgroundColor = 'lightgray'
            } else {
                title.style.backgroundColor = 'lightblue'
            }
        })
