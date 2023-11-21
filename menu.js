
// MENU MOBILE

let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

btnMenu.addEventListener('click', () => {
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})
overlay.addEventListener('click', () => {
    menu.classList.remove('abrir-menu')
})

// FIM DO MENU MOBILE

//links de menu e formulario

document.addEventListener('DOMContentLoaded', function () {
    const btnMenu = document.getElementById('btn-menu');
    const btnFechar = document.querySelector('.btn-fechar');
    const menuMobile = document.getElementById('menu-mobile');
    const overlayMenu = document.getElementById('overlay-menu');
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();


        alert('Seus dados foram enviados com sucesso!');
    });
});



function abrirMenu() {
    menuMobile.style.transform = 'translateX(0)';
    overlayMenu.style.display = 'block';
}


function fecharMenu() {
    menuMobile.style.transform = 'translateX(-100%)';
    overlayMenu.style.display = 'none';
}


btnMenu.addEventListener('click', abrirMenu);


btnFechar.addEventListener('click', fecharMenu);


overlayMenu.addEventListener('click', fecharMenu);

//fim dos links de menu e formulario

