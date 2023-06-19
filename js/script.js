// array delle immagini

let imgCarousel = ['./img/01.webp' , './img/02.webp' , './img/03.webp' , './img/04.webp' ,'./img/05.webp'] ;


let imageCarouselContainer = document.querySelector('.images-carousel');

let currentlyActiveElementIdenz = 0;

for(let i = 0 ; i <= imgCarousel.length ; i++){


    if(i == 0){


    imageCarouselContainer.innerHTML = imageCarouselContainer.innerHTML + `
    
    <div class="images active">

        <img src="${imgCarousel[i]}" alt="">

    </div>
    
    
    `;
}
else{
   
    imageCarouselContainer.innerHTML = imageCarouselContainer.innerHTML + `
    
    <div class="images">

        <img src="${imgCarousel[i]}" alt="">

    </div>
    
    
    `;



}

}

const allImages = document.querySelectorAll('.images');


let nextArrow = document.querySelector ('.next')

nextArrow.addEventListener('click' , 

    function(){
        if(currentlyActiveElementIdenz < allImages -1){

            // tolgo la classe active all'immagine dopo il click
        allImages[currentlyActiveElementIdenz].classList.remove('active');
        currentlyActiveElementIdenz ++;
        // aggiungo la classe active all'immagine dopo
        allImages[currentlyActiveElementIdenz].classList.add('active');


        }
    }


    

)


let prevArrow = document.querySelector ('.prev')

prevArrow.addEventListener('click' , 

    function(){
        if(currentlyActiveElementIdenz < allImages -1){

            // tolgo la classe active all'immagine dopo il click
        allImages[currentlyActiveElementIdenz].classList.remove('active');
        currentlyActiveElementIdenz --;
        // aggiungo la classe active all'immagine dopo
        allImages[currentlyActiveElementIdenz].classList.add('active');


        }
    }

)    
