$(document).ready(function(){
$('.slider').slick({
    arrows:false,
    dots:true,
    appendDots:'.slider-dots',
    dotsClass:'dots'
});


let hamberger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobileNav = document.querySelector('.mobile-nav');

hamberger.addEventListener('click', function(){
  mobileNav.classList.add('open');  
});

times.addEventListener('click', function(){
    mobileNav.classList.remove('open');  
});

});
//animation
const words = ["Fullstack Developer", "MERN Stack Developer", "WEB Developer", "Coder"];
let currentIndex = 0;
let charIndex = 0;
const typingDelay = 250;
const erasingDelay = 200;
const newWordDelay = 1500; // Delay between current and next word
const textElement = document.getElementById('animated-text');
const cursorElement = document.getElementById('cursor');

function type() {
    if (charIndex < words[currentIndex].length) {
        textElement.textContent += words[currentIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newWordDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        textElement.textContent = words[currentIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        currentIndex = (currentIndex + 1) % words.length;
        setTimeout(type, typingDelay);
    }
}

// Start the typing effect
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(type, newWordDelay);
});
