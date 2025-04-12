'use strict'

//Constantes y variables

const img = document.querySelector(`.img`)
const lightbox =document.querySelector(`.lightbox`)
const closeBtn = document.querySelector('.close')

img.addEventListener(`click`,()=>{
        lightbox.classList.add(`isActive`)
    });



closeBtn.addEventListener('click', () => {
  lightbox.classList.remove('isActive');
});