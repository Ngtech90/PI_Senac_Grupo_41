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

// Adiciona um ouvinte de eventos para o botão de abrir o menu
document.getElementById('btn-menu').addEventListener('click', toggleMobileMenu);

// Adiciona um ouvinte de eventos para o botão de fechar o menu
document.getElementById('btn-fechar').addEventListener('click', closeMobileMenu);

// Adiciona um ouvinte de eventos para o overlay do menu para fechar quando clicado
document.getElementById('overlay-menu').addEventListener('click', closeMobileMenu);
