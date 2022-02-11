//Select DOM items

const menuBtn = document.querySelector('.menu_btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu_nav');
const menuBranding = document.querySelector('.menu_branding');
const navItems = document.querySelectorAll('.nav_item');

//Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener('click',toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');

        navItems.forEach(item => {
            item.classList.add('show');
        })

        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');

        navItems.forEach(item => {
            item.classList.remove('show');
        })

        showMenu = false;
    }
}