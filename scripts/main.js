window.addEventListener('scroll', ()=>{
    var navbar = document.querySelector('nav');
    navbar.classList.toggle('sticky', window.scrollY > 0);
});