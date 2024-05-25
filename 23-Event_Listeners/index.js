// ! ---- DOM - Event Listeners

// Event Listeners

// Yaygın Html Eventleri : onClick(), onChange(), onMouseOver(), onMouseOver(), onMouseOut(), onkeydown, onkeyup, onload.
//Herhangi bir Dom objesine event listener ekleyebiliriz.
//Html elementlerineki olayları/değişiklik ve durumları dinlemek için addEventListener() methodunu kullanırız.
// İki değişken alır birisi eventListener diğeri ise callback fonksiyonudur.


   const button = document.querySelector('#btn')
    // ------- Click event :
    button.addEventListener('click', (e) => { // click eventi gerçekleştiğinde yapılacaklar
        console.log(`${e.target.textContent}`)
        console.log('Button Clicked')
    })

    // ------ onClick Event
    const onClickEvent = () => {
        console.log('OnClickEvent id li butona tıklandı.')
    }

    // ------ dblclick
    const dblclickBtn = document.querySelector('#dblclickBtn')
    dblclickBtn.addEventListener('dblclick', (e) => {
        console.log('Double Clicked')
        alert(e.target.textContent)
    })

    // ---- Mouse enter

    const mouseEnterBtn = document.querySelector('#mouseEnterBtn')
    mouseEnterBtn.addEventListener('mouseenter', (e) => { // on hover mantığıdır. element'in üzerinde durulduğunda çalışır.
        console.log('Mouse Enter')

    })


/*
click - when the element clicked
dblclick - when the element double clicked
mouseenter - when the mouse point enter to the element
mouseleave - when the mouse pointer leave the element
mousemove - when the mouse pointer move on the element
mouseover - when the mouse pointer move on the element
mouseout -when the mouse pointer out from the element
input -when value enter to input field
change -when value change on input field
blur -when the element is not focused
keydown - when a key is down
keyup - when a key is up
keypress - when we press any key
onload - when the browser has finished loading a page
*/