'use strict';
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let slides = document.querySelectorAll('.slider .col');

let slidePos = 0;

next.addEventListener('click', function(){
    slidePos++
    console.log(slidePos)
    for(let slide of slides){
        //if(slidePos == 0) {slide.style.left = '-25%'}
        if(slidePos == 1) {slide.style.left = '-25%'}
        if(slidePos == 2) {slide.style.left = '-50%'}
        if(slidePos == 3) {slide.style.left = '-75%'}
        if(slidePos == 4) {slide.style.left = '0%'}

        if(slidePos > 4) {
            slidePos = 1;
            slide.style.left = '-25%'
            //slide.style.left = '-25%'
        }
    }
})
prev.addEventListener('click', function(){
    slidePos--
    console.log(slidePos)
    for(let slide of slides){
        if(slidePos == 0) {slide.style.left = '0%'}
        if(slidePos == 1) {slide.style.left = '-25%'}
        if(slidePos == 2) {slide.style.left = '-50%'}
        if(slidePos == 3) {slide.style.left = '-75%'}
        if(slidePos <= 0 ) {slidePos = 0}
    }
})