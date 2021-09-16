'use strict';
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let slides = document.querySelectorAll('.slider .col');

let slidePos = 0;

next.addEventListener('click', function(){
    slidePos++
    for(let slide of slides){
        if(slidePos == 1) {slide.style.left = '-25%'}
        if(slidePos == 2) {slide.style.left = '-50%'}
        if(slidePos == 3) {slide.style.left = '-75%'}
        if(slidePos == 4) {slide.style.left = '-100%'}
        
        if(slidePos > 4) {
            slidePos = 4;
        }
    }
})
prev.addEventListener('click', function(){
    slidePos--
    for(let slide of slides){
        if(slidePos == 0) {slide.style.left = '0%'}
        if(slidePos == 1) {slide.style.left = '-25%'}
        if(slidePos == 2) {slide.style.left = '-50%'}
        if(slidePos == 3) {slide.style.left = '-75%'}
        if(slidePos <= 0 ) {slidePos = 0}
    }
})

//Change image in 'about us' section to mobile version

window.addEventListener('resize', changeImg);
function changeImg() {
    let sectionImg = document.querySelector('.mobile-img');
    let w = window.innerWidth;
    console.log(w)
    if(w < 976) {
        sectionImg.src = 'imgs/vid-mob.png'
    }
    else {
        sectionImg.src = 'imgs/about-video.png'
    }
}
