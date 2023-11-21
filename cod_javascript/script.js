// script.js

function toggleMobileMenu() {
    var menuMobile = document.getElementById('menu-mobile');
    var overlayMenu = document.getElementById('overlay-menu');

    menuMobile.classList.toggle('active');
    overlayMenu.classList.toggle('active');
}


function closeMobileMenu() {
    var menuMobile = document.getElementById('menu-mobile');
    var overlayMenu = document.getElementById('overlay-menu');

    menuMobile.classList.remove('active');
    overlayMenu.classList.remove('active');
}


document.getElementById('btn-menu').addEventListener('click', toggleMobileMenu);

document.getElementById('btn-fechar').addEventListener('click', closeMobileMenu);


document.getElementById('overlay-menu').addEventListener('click', closeMobileMenu);
