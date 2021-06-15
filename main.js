// SELECT ELEMENT FUNCTION
const selectElement = function (element) {
    return document.querySelector(element);

};

let menuToggler = selectElement('menuToggle');
let body = selectElement('body');

menuToggler.addEventListener('click', function() {
    body.classList.toggle('open');
});

// SCROLL REVEAL

window.sr = ScrollReveal();


sr.reveal('.animateLeft', {
    origin: 'left', 
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animateRight', {
    origin: 'right', 
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal('.animateTop', {
    origin: 'top', 
    duration: 1000,
    distance: '25rem',
    delay: 600
});
sr.reveal('.animateBottom', {
    origin: 'bottom', 
    duration: 1000,
    distance: '25rem',
    delay: 600
});