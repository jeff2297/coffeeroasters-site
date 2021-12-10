//for mobile devices control
let hamburger = document.querySelector('.hamburger');
let closeIcon = document.querySelector('.close-icon');
let navbar = document.querySelector('.navbar');


hamburger.addEventListener('click', () => {
    navbar.classList.add('visible');
    hamburger.style.display = 'none';
    closeIcon.style.display = 'block';
})

closeIcon.addEventListener('click', () => {
    navbar.classList.remove('visible');
    hamburger.style.display = 'block';
    closeIcon.style.display = 'none';
})

