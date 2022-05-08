'use strict'
const logoItem = document.querySelector('.company-logo');

const menuToggle = document.querySelector('.menu-toggle');
const bxMenu = document.querySelector('.bx-menu');
const bxX = document.querySelector('.bx-x');
const linkItems = document.querySelector('nav-link');

const navBar = document.querySelector('.navbar');

// --- open menu ---

bxMenu.addEventListener('click', (e) => {
    if (e.target.classList.contains('bx-menu')) {
        navBar.classList.add('show-navbar');
        bxMenu.classList.add('hide-bx');
        bxX.classList.add('show-bx');
        logoItem.style.color = "white";
        linkItems.style.color = "white";

    }

})

// --- close menu ---

bxX.addEventListener('click', (e) => {
    if (e.target.classList.contains('bx-x')) {
        navBar.classList.remove('show-navbar');
        bxMenu.classList.remove('hide-bx');
        bxX.classList.remove('show-bx');
        logoItem.style.color = "black";
        linkItems.classList.remove = "white-nav";
    }
})