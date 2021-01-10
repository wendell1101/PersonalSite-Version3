const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.main-nav');
const wrapper = document.querySelector('.wrapper');
const bar1 = document.querySelector('.bar1');
const bar2 = document.querySelector('.bar2');
const bar3 = document.querySelector('.bar3');
const heroContainer = document.querySelector('.hero');
const heroToggle = document.querySelector('.toggled');
const overlap = document.querySelector('#overlap');
const navLinks = document.querySelectorAll('.side-nav li');
const icons = document.querySelectorAll('.icon');
const mainWrapper = document.querySelector('.main-wrapper');



hamburger.addEventListener('click', () =>{
    // nav.classList.toggle('main-nav-active');
    hamburger.classList.toggle('hamburger-active');
    bar1.classList.toggle('bar1-cross-left');
    bar2.classList.toggle('bar2-active');
    bar3.classList.toggle('bar3-cross-right');
    heroContainer.classList.toggle('hero-active');
    heroToggle.classList.toggle('hero-active-toggle');
    mainWrapper.classList.toggle('main-off');

})

// AOS

AOS.init();


