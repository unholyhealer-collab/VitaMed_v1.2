/*
window.addEventListener('scroll', ()=>{
    var navbar = document.querySelector('nav');
    navbar.classList.toggle('sticky', window.scrollY > 0);
});
*/

$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        dots: true,
        arrows: false
    });
});

const whatsapp = document.querySelector('#whatsapp');
const instagram = document.querySelector('#instagram');

whatsapp.addEventListener('click', ()=>{
    window.open();
});

instagram.addEventListener('click', ()=>{
    window.open('https://www.instagram.com/timur_mironyuk/');
});