/**
Riprendiamo l'esercizio carosello e rifacciamolo, questa volta usando gli oggetti, prendendo come riferimento il codice scritto oggi insieme a lezione, che troverete direttamente nella mia repository di github a questo link: [link github]

Modifichiamo il codice dell'esercizio per renderlo funzionante con un array di oggetti al posto dei tre array separati, con una sola regola: non è possibile modificare l'HTML ma solamente JS e CSS.
Ricordiamo sempre l'importanza dell'integrità del dato.

Bonus 1:
Sperimentiamo attraverso l'uso delle timing functions anche una funzionalità di scorrimento al nostro carosello:
al click di un bottone o già dall'inizio possiamo far partire, ad intervalli di tempo a piacere, lo scorrimento delle immagini disponibili nel carosello stesso.

Bonus 2:
E se volessi un bottone per invertire la "direzione" del carosello?
 */


const imageArray = [
    {
        src : "img/img-1.jpg",
        name : "Immagine isola"
    },
    {
        src : "img/img-2.jpg",
        name : "Immagine deserto"
    },
    {
        src : "img/img-3.jpg",
        name : "Immagine prateria"
    },
    {
        src : "img/img-4.jpg",
        name : "Immagine montagne"
    },
    {
        src : "img/img-5.jpg",
        name : "Immagine lago"
    }
]

const imageContainer = document.querySelector('.my-carousel-images');
const thumbnailContainer = document.querySelector('.my-thumbnails');


for (let i = 0; i < imageArray.length; i++) {
    imageContainer.innerHTML += `<img class="img-fluid my-carousel-item" src="${imageArray[i].src}" alt="${imageArray[i].name}">`
    
    thumbnailContainer.innerHTML += `<img class="my-miniature-item" src="${imageArray[i].src}" alt="${imageArray[i].name}">`
}


const carouselElements = document.getElementsByClassName('my-carousel-item');
const miniatureElements = document.getElementsByClassName('my-miniature-item');
console.log(miniatureElements);


carouselElements[0].classList.add('my-active');
miniatureElements[0].classList.add('my-opacity-min');


const prevBtn = document.querySelector('.my-previous');
const nextBtn = document.querySelector('.my-next');
let activeElement = 0;
prevBtn.addEventListener('click', function() {
    // Remove active from the current items
    carouselElements[activeElement].classList.remove('my-active');
    miniatureElements[activeElement].classList.remove('my-opacity-min');

    activeElement--;

    // Loop if condition that return to end
    if(activeElement < 0) {
        activeElement = carouselElements.length - 1;
    }

    // Add active to the previous items
    carouselElements[activeElement].classList.add('my-active');
    miniatureElements[activeElement].classList.add('my-opacity-min');
});

nextBtn.addEventListener('click', function() {
    // Remove active from the current items
    carouselElements[activeElement].classList.remove('my-active');
    miniatureElements[activeElement].classList.remove('my-opacity-min');

    activeElement++;

    // Loop if condition that return to start
    if(activeElement > (carouselElements.length - 1)) {
        activeElement = 0;
    }

    // Add active to the next items
    carouselElements[activeElement].classList.add('my-active');
    miniatureElements[activeElement].classList.add('my-opacity-min');
});


setInterval(() => {
    carouselElements[activeElement].classList.remove('my-active');
    miniatureElements[activeElement].classList.remove('my-opacity-min');

    activeElement++;

    // Loop if condition that return to start
    if(activeElement > (carouselElements.length - 1)) {
        activeElement = 0;
    }

    // Add active to the next items
    carouselElements[activeElement].classList.add('my-active');
    miniatureElements[activeElement].classList.add('my-opacity-min');
}, 2500);